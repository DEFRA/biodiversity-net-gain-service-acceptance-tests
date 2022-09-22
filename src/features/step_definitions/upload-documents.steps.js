import { Given, When, Then } from "@cucumber/cucumber";
import { join } from "path";
import managementPlanUploadPage from "../page_objects/management_plan/management-plan-upload.page";
import managementPlanCheckPage from "../page_objects/management_plan/management-plan-check.page";
import legalAgreementUploadPage from "../page_objects/legal_agreement/legal-agreement-upload.page";
import legalAgreementCheckPage from "../page_objects/legal_agreement/legal-agreement-check.page";
import landBoundaryFileUploadPage from "../page_objects/land_boundary/upload-land-boundary.page";
import landBoundaryFileCheckPage from "../page_objects/land_boundary/check-land-boundary-file.page";
import metricUploadPage from "../page_objects/metric/metric-upload.page";
import metricCheckPage from "../page_objects/metric/metric-check.page";
import { assert } from "console";
import { get } from "http";

let UploadPage = legalAgreementUploadPage;
let CheckPage = legalAgreementCheckPage;

let filename = "";
let filePath = "";
let remoteFilePath = "";

When("I choose and upload a {string}", async (document) => {
  //default test file
  filePath = join(__dirname, "../../TestFiles/test_12kb.docx");

  switch (document) {
    case "legal-agreement": {
      UploadPage = legalAgreementUploadPage;
      CheckPage = legalAgreementCheckPage;
      break;
    }
    case "management-plan": {
      UploadPage = managementPlanUploadPage;
      CheckPage = managementPlanCheckPage;
      break;
    }
    case "land-boundary": {
      UploadPage = landBoundaryFileUploadPage;
      CheckPage = landBoundaryFileCheckPage;
      break;
    }
    case "metric": {
      UploadPage = metricUploadPage;
      CheckPage = metricCheckPage;

      //metric is .xlsx and .xslm files only
      filePath = join(__dirname, "../../TestFiles/test_12kb.xlsx");
      break;
    }
  }

  remoteFilePath = await browser.uploadFile(filePath);

  // get the filename for assertions
  var group = filePath.split("\\");
  filename = group[group.length - 1];

  // open the upload url page
  browser.url(UploadPage.path);

  await UploadPage.govFileUpload.setValue(remoteFilePath);
  await UploadPage.continueButton.click();
});

Given(/^I should be able to upload all allowed filetypes$/, async (table) => {
  const tableRows = table.hashes();
  for (const element of tableRows) {
    switch (element.document) {
      case "legal-agreement": {
        UploadPage = legalAgreementUploadPage;
        CheckPage = legalAgreementCheckPage;
        break;
      }
      case "management-plan": {
        UploadPage = managementPlanUploadPage;
        CheckPage = managementPlanCheckPage;
        break;
      }
      case "land-boundary": {
        UploadPage = landBoundaryFileUploadPage;
        CheckPage = landBoundaryFileCheckPage;
        break;
      }
      case "metric": {
        UploadPage = metricUploadPage;
        CheckPage = metricCheckPage;
        break;
      }
    }

    await UploadPage.open();
    await $("h1").waitForExist({ timeout: 5000 });

    // test file, appended with the filetype
    filePath = join(__dirname, "../../TestFiles/test_12kb." + element.filetype);

    remoteFilePath = await browser.uploadFile(filePath);

    // get the filename for assertions
    var group = filePath.split("\\");
    filename = group[group.length - 1];

    // open the upload url page
    browser.url(UploadPage.path);

    await UploadPage.govFileUpload.setValue(remoteFilePath);
    await UploadPage.continueButton.click();

    await $("h1").waitForExist({ timeout: 5000 });

    // assert against the page title
    await expect(await browser.getTitle()).toContain(CheckPage.titleText);
  }
});

Then("There should be a link to download the document", async () => {
  // wait for file to be uploaded and show an element on the check/confirm page
  await CheckPage.downloadLink.waitForExist({ timeout: 5000 });

  /* verify correct file has been uploaded
  Grab the filename text that the page displays after processing the upload
  Assert that the filename text matches the filename provided in the test
  */
  const link = await CheckPage.downloadLink;
  await expect(link).toHaveText(filename);

  // verify is a valid link
  await expect(link.getAttribute("href")).not.toBeNull();
});

Then("I should be able to see the filesize of the document", async () => {
  // get actual filesize of test file
  await expect(CheckPage.filesizeIndicator).toHaveTextContaining("0.01 MB");
});

When("I choose a file type that is not in the specified format", async () => {
  const filePath = join(__dirname, "../../TestFiles/test.txt");
  const remoteFilePath = await browser.uploadFile(filePath);

  // open the upload url page
  browser.url(UploadPage.path);

  await UploadPage.govFileUpload.setValue(remoteFilePath);
  await UploadPage.continueButton.click();
});

Then("I should not be able to upload the file", async () => {
  // should still be on the upload page instead of the check page
  expect(await browser.getTitle()).not.toContain(CheckPage.titleText);
});

Then("I am informed that the file is empty", async () => {
  // wait for error message
  await UploadPage.errorMsg.waitForExist({ timeout: 5000 });

  await expect(UploadPage.errorMsg).toHaveTextContaining(
    "The selected file is empty"
  );
});

Then("I am informed of what the allowed file types should be", async () => {
  // wait for error message
  await (await UploadPage.errorMsg).waitForDisplayed({ timeout: 5000 });

  let errorTxt = "";

  switch (UploadPage) {
    case landBoundaryFileUploadPage: {
      errorTxt = "The selected file must be a DOC, DOCX, JPG, PNG or PDF";
      break;
    }
    case metricUploadPage: {
      errorTxt = "The selected file must be an XLSM or XLSX";
      break;
    }
    default: {
      errorTxt = "The selected file must be a DOC, DOCX or PDF";
    }
  }

  // check errorMsg text
  await expect(UploadPage.errorMsg).toHaveTextContaining(errorTxt);
});

When("I choose a different file", async () => {
  await CheckPage.radioNo.waitForExist({ timeout: 5000 });
  await CheckPage.radioNo.click();
  await CheckPage.continueButton.click();
});

When("I choose an empty file", async () => {
  switch (UploadPage) {
    case metricUploadPage: {
      filePath = join(__dirname, "../../TestFiles/test_1k_empty.xlsx");
      break;
    }
    default: {
      filePath = join(__dirname, "../../TestFiles/test_1k_empty.pdf");
    }
  }

  remoteFilePath = await browser.uploadFile(filePath);

  // get the filename for assertions
  var group = filePath.split("\\");
  filename = group[group.length - 1];

  // open the upload url page
  browser.url(UploadPage.path);

  await UploadPage.govFileUpload.setValue(remoteFilePath);
  await UploadPage.continueButton.click();
});

Then("The original document should be deleted", async function () {
  return "pending";
});
