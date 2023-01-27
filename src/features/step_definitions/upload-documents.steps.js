import { Given, When, Then } from "@cucumber/cucumber";
import { join, basename } from "path";
import managementPlanUploadPage from "../page_objects/management_plan/management-plan-upload.page";
import managementPlanCheckPage from "../page_objects/management_plan/management-plan-check.page";
import legalAgreementUploadPage from "../page_objects/legal_agreement/upload-legal-agreement.page";
import legalAgreementCheckPage from "../page_objects/legal_agreement/check-legal-agreement-file.page";
import landBoundaryFileUploadPage from "../page_objects/land_boundary/upload-land-boundary.page";
import landBoundaryGeospatialUploadPage from "../page_objects/land_boundary/upload-geospatial-file.page";
import landBoundaryFileCheckPage from "../page_objects/land_boundary/check-land-boundary-file.page";
import landBoundaryGeospatialCheckPage from "../page_objects/land_boundary/check-geospatial-file.page";
import metricUploadPage from "../page_objects/metric/metric-upload.page";
import metricCheckPage from "../page_objects/metric/metric-check.page";
import landOwnershipUploadPage from "../page_objects/land_ownership/land-ownership-upload.page";
import landOwnershipCheckPage from "../page_objects/land_ownership/land-ownership-check.page";

let UploadPage = legalAgreementUploadPage;
let CheckPage = legalAgreementCheckPage;

let  basePage = legalAgreementUploadPage;

let filename = "";
let filePath = "";
let remoteFilePath = "";

When("I choose and upload a {string} file", async (document) => {
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
    case "geospatial": {
      UploadPage = landBoundaryGeospatialUploadPage;
      CheckPage = landBoundaryGeospatialCheckPage;

      //default geospatial : esri file 
      filePath = join(__dirname, "../../TestFiles/test_geospatial.zip");
      break;
    }
    case "geospatial-geopackage": {
      UploadPage = landBoundaryGeospatialUploadPage;
      CheckPage = landBoundaryGeospatialCheckPage;

      //Geopackage geospatial 
      filePath = join(__dirname, "../../TestFiles/test_geospatial.gpkg");
      break;
    }
    case "geospatial-geojson": {
      UploadPage = landBoundaryGeospatialUploadPage;
      CheckPage = landBoundaryGeospatialCheckPage;

      //GeoJson geospatial 
      filePath = join(__dirname, "../../TestFiles/test_geospatial.geojson");
      break;
    }
    case "metric": {
      UploadPage = metricUploadPage;
      CheckPage = metricCheckPage;

      //metric is .xlsx and .xslm files only
      filePath = join(__dirname, "../../TestFiles/test_12kb.xlsx");
      break;
    }
    case "land-ownership": {
      UploadPage = landOwnershipUploadPage;
      CheckPage = landOwnershipCheckPage;
      break;
    }
  }

  remoteFilePath = await browser.uploadFile(filePath);

  // get the filename for assertions
  var group = filePath.split("\\");
  filename = basename(group[group.length - 1]);

  // open the upload url page
  await browser.url(UploadPage.path);

  // set the remote path value to the upload element and continue
  await UploadPage.govFileUpload.setValue(remoteFilePath);
  await UploadPage.continueButton.click();
});

When("I choose and upload the same file", async () => {

  remoteFilePath = await browser.uploadFile(filePath);

  // get the filename for assertions
  var group = filePath.split("\\");
  filename = basename(group[group.length - 1]);

  // open the upload url page
  await browser.url(UploadPage.path);

  // set the remote path value to the upload element and continue
  await UploadPage.govFileUpload.setValue(remoteFilePath);
  await UploadPage.continueButton.click();

});

Then("I should be able to upload a {string} file with a filetype of {string}", async (document, filetype) => {

  filePath = join(__dirname, "../../TestFiles/test_12kb." + filetype);
  
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
    case "geospatial": {
      UploadPage = landBoundaryGeospatialUploadPage;
      CheckPage = landBoundaryGeospatialCheckPage;
  
      //default geospatial : esri file 
      filePath = join(__dirname, "../../TestFiles/test_geospatial." + filetype);
      break;
    }
    case "geospatial-geopackage": {
      UploadPage = landBoundaryGeospatialUploadPage;
      CheckPage = landBoundaryGeospatialCheckPage;
  
      //Geopackage geospatial 
      filePath = join(__dirname, "../../TestFiles/test_geospatial." + filetype);
      break;
    }
    case "geospatial-geojson": {
      UploadPage = landBoundaryGeospatialUploadPage;
      CheckPage = landBoundaryGeospatialCheckPage;
  
      //GeoJson geospatial 
      filePath = join(__dirname, "../../TestFiles/test_geospatial." + filetype);
      break;
    }
    case "metric": {
      UploadPage = metricUploadPage;
      CheckPage = metricCheckPage;
  
      //metric is .xlsx and .xslm files only
      filePath = join(__dirname, "../../TestFiles/test_12kb." + filetype);
      break;
    }
    case "land-ownership": {
      UploadPage = landOwnershipUploadPage;
      CheckPage = landOwnershipCheckPage;
      break;
    }
  }
  
  remoteFilePath = await browser.uploadFile(filePath);
  
    // get the filename for assertions
    var group = filePath.split("\\");
    filename = basename(group[group.length - 1]);
  
    // open the upload url page
    await browser.url(UploadPage.path);
  
    // set the remote path value to the upload element and continue
    await UploadPage.govFileUpload.setValue(remoteFilePath);
    await UploadPage.continueButton.click();
  
     // assert against the page title
    await $("h1").waitForExist({ timeout: 5000 });
    await expect(await browser.getTitle()).toContain(CheckPage.titleText);
  
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

Then("I should be able to see the filesize of the document as {string}", async (filesize) => {
  // get actual filesize of test file
  await expect(CheckPage.filesizeIndicator).toHaveTextContaining(filesize);
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
  await basePage.radioNo.waitForExist({ timeout: 5000 });
  await basePage.radioNo.click();
  await basePage.continueButton.click();
});

When("I confirm it is the correct file", async () => {
  await basePage.radioYes.waitForExist({ timeout: 5000 });
  await basePage.radioYes.click();
  await basePage.continueButton.click();
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
  filename = basename(group[group.length - 1]);

  // open the upload url page
  browser.url(UploadPage.path);

  await UploadPage.govFileUpload.setValue(remoteFilePath);
  await UploadPage.continueButton.click();
});

Then("The original document should be deleted", async function () {
  return "pending";
});