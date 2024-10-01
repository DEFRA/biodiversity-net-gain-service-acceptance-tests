const { Given, When, Then, BeforeAll } = require('@wdio/cucumber-framework');
const { join, basename } = require("node:path");
const pages = require('../page_objects/page_objects');
const { setUploadPagesForDocument, uploadFileForDocument, getFilePathForDocument } = require('../utils/documentUploadHelper'); 

// let UploadPage = pages["legal-agreement-upload"];
// let CheckPage = pages["legal-agreement-cc-upload"];
// let basePage = pages["legal-agreement-upload"];

let filename = "";

When("I upload a {string} file", async (document) => {
    const { UploadPage, CheckPage } = setUploadPagesForDocument(document);
    
    const filePath = getFilePathForDocument(document);

    // Upload the document and get the filename
    filename = await uploadFileForDocument(UploadPage, filePath);

    // confirm that the file is correct
    await CheckPage.radioYes.waitForExist({ timeout: 5000 });
    await CheckPage.radioYes.click();
    await CheckPage.continueButton.click();

  });

When("I want to upload the metric file", async () => {
  await expect(pages["developer/tasklist"].uploadMetricFileBtn).toExist();
  await pages["developer/tasklist"].uploadMetricFileBtn.click();
});

When("I choose and upload the same file", async () => {
  remoteFilePath = await browser.uploadFile(filePath);

  var group = filePath.split("\\");
  filename = basename(group[group.length - 1]);

  await UploadPage.govFileUpload.setValue(remoteFilePath);
  await UploadPage.continueButton.click();
});

Then("I should be able to upload a {string} file with a filetype of {string}", async (document, filetype) => {
  filePath = join(__dirname, "../../TestFiles/test_12kb." + filetype);

  switch (document) {
    case "written-authorisation": {
      UploadPage = pages["written-authorisation-upload"];
      CheckPage = pages["check-written-authorisation"];
      break;
    }
    case "legal-agreement": {
      UploadPage = pages["legal-agreement-upload"];
      CheckPage = pages["legal-agreement-cc-upload"];
      break;
    }
    case "management-plan": {
      UploadPage = pages["management-plan-upload"];
      CheckPage = pages["management-plan-check"];
      break;
    }
    case "land-boundary": {
      UploadPage = pages["land-boundary-upload"];
      CheckPage = pages["check-land-boundary-file"];
      break;
    }
    case "geospatial": {
      UploadPage = pages["geospatial-upload"];
      CheckPage = pages["check-geospatial-file"];
      filePath = join(__dirname, "../../TestFiles/test_geospatial." + filetype);
      break;
    }
    case "geospatial-geopackage": {
      UploadPage = pages["geospatial-upload"];
      CheckPage = pages["check-geospatial-file"];
      filePath = join(__dirname, "../../TestFiles/test_geospatial." + filetype);
      break;
    }
    case "geospatial-geojson": {
      UploadPage = pages["geospatial-upload"];
      CheckPage = pages["check-geospatial-file"];
      filePath = join(__dirname, "../../TestFiles/test_geospatial." + filetype);
      break;
    }
    case "metric": {
      UploadPage = pages["metric-upload"];
      CheckPage = pages["metric-check"];
      filePath = join(__dirname, "../../TestFiles/test_metric." + filetype);
      break;
    }
    case "land-ownership": {
      UploadPage = pages["land-ownership-upload"];
      CheckPage = pages["land-ownership-check"];
      break;
    }
  }

  remoteFilePath = await browser.uploadFile(filePath);

  var group = filePath.split("\\");
  filename = basename(group[group.length - 1]);

  await browser.url(UploadPage.path);

  await UploadPage.govFileUpload.setValue(remoteFilePath);
  await UploadPage.continueButton.click();

  await $("h1").waitForExist({ timeout: 5000 });
  await expect(await browser.getTitle()).toContain(CheckPage.titleText);
});

Then("There should be a link to download the document", async () => {
  await CheckPage.downloadLink.waitForExist({ timeout: 5000 });
  const link = await CheckPage.downloadLink;
  await expect(link).toHaveText(filename);
  await expect(link.getAttribute("href")).not.toBeNull();
});

Then("I should be able to see the filesize of the document as {string}", async (filesize) => {
  await expect(CheckPage.filesizeIndicator).toHaveText(filesize);
});

When("I upload a file that contains malware or a virus", async () => {
  const filePath = join(__dirname, "../../TestFiles/test_eicar-adobe-acrobat-attachment.pdf");
  const remoteFilePath = await browser.uploadFile(filePath);

  browser.url(UploadPage.path);

  await UploadPage.govFileUpload.setValue(remoteFilePath);
  await UploadPage.continueButton.click();
});

When("I choose a file type that is not in the specified format", async () => {
  const filePath = join(__dirname, "../../TestFiles/test.txt");
  const remoteFilePath = await browser.uploadFile(filePath);

  browser.url(UploadPage.path);

  await UploadPage.govFileUpload.setValue(remoteFilePath);
  await UploadPage.continueButton.click();
});

Then("I should not be able to upload the file", async () => {
  expect(await browser.getTitle()).not.toContain(CheckPage.titleText);
});

Then("I am informed that the file is empty", async () => {
  await UploadPage.errorMsg.waitForExist({ timeout: 5000 });
  await expect(UploadPage.errorMsg).toHaveText(expect.stringContaining("The selected file is empty"));
});

Then("I am informed that the selected file does not have enough data", async () => {
  await UploadPage.errorMsg.waitForExist({ timeout: 5000 });
  await expect(UploadPage.errorMsg).toHaveText(expect.stringContaining("The selected file does not have enough data"));
});

Then("I am informed that the selected file is not a valid Metric", async () => {
  await UploadPage.errorMsg.waitForExist({ timeout: 5000 });
  await expect(UploadPage.errorMsg).toHaveText(expect.stringContaining("The selected file is not a valid Metric"));
});

Then("I am informed of what the allowed file types should be", async () => {
  await UploadPage.errorMsg.waitForDisplayed({ timeout: 5000 });

  let errorTxt = "";

  switch (UploadPage) {
    case pages["land-boundary-upload"]: 
      errorTxt = "The selected file must be a DOC, DOCX, JPG, PNG or PDF";
      break;
    case pages["developer-metric-upload"]: 
    case pages["metric-upload"]: 
      errorTxt = "The selected file must be an XLSM or XLSX";
      break;  
    default: 
      errorTxt = "The selected file must be a DOC, DOCX or PDF";  
  }

  await expect(UploadPage.errorMsg).toHaveText(expect.stringContaining(errorTxt));
});

When("I choose a different file", async () => {
  const basePage = pages['legal-agreement-upload'];
  await basePage.radioNo.waitForExist({ timeout: 5000 });
  await basePage.radioNo.click();
  await basePage.continueButton.click();
});

When("I confirm it is the correct file", async () => {
  const basePage = pages['legal-agreement-upload'];
  await basePage.radioYes.waitForExist({ timeout: 5000 });
  await basePage.radioYes.click();
  await basePage.continueButton.click();
});

When("I confirm the correct file", async () => {
  const basePage = pages['legal-agreement-upload'];
  await basePage.radioYes.waitForExist({ timeout: 5000 });
  await basePage.radioYes.click();
  await basePage.continueButton.click();
});

When("I choose an empty {string} file", async (document) => {
  filePath = join(__dirname, "../../TestFiles/test_1k_empty.pdf");

  switch (document) {
    case "metric": {
      UploadPage = pages["metric-upload"];
      filePath = join(__dirname, "../../TestFiles/test_empty_non_metric.xlsx");
      break;
    }
    case "land-ownership": {
      UploadPage = pages["land-ownership-upload"];
      break;
    }
    case "land-boundary": {
      UploadPage = pages["land-boundary-upload"];
      break;
    }
    case "legal-agreement": {
      UploadPage = pages["legal-agreement-upload"];
      break;
    }
  }

  remoteFilePath = await browser.uploadFile(filePath);

  var group = filePath.split("\\");
  filename = basename(group[group.length - 1]);

  browser.url(UploadPage.path);

  await UploadPage.govFileUpload.setValue(remoteFilePath);
  await UploadPage.continueButton.click();
});

When("I choose a metric file with no data", async () => {
  filePath = join(__dirname, "../../TestFiles/test_metric_empty.xlsm");

  remoteFilePath = await browser.uploadFile(filePath);

  var group = filePath.split("\\");
  filename = basename(group[group.length - 1]);

  browser.url(pages["metric-upload"].path);

  await pages["metric-upload"].govFileUpload.setValue(remoteFilePath);
  await pages["metric-upload"].continueButton.click();
});

When("I choose a {string} file of {string} or {string} Bytes", async (byteType, filesize, byteSize) => {
  filePath = join(__dirname, "../../TestFiles/test_" + filesize + "_decimal.pdf");

  remoteFilePath = await browser.uploadFile(filePath);

  var group = filePath.split("\\");
  filename = basename(group[group.length - 1]);

  browser.url(UploadPage.path);

  await UploadPage.govFileUpload.setValue(remoteFilePath);
  await UploadPage.continueButton.click();
});

Then("The original document should be deleted", async function () {
  return "pending";
});
