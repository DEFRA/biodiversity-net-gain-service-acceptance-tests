const { When, Then } = require("@wdio/cucumber-framework");

const path = require("path");
const managementPlanUploadPage = require("../page_objects/management_plan/management-plan-upload.page");
const managementPlanCheckPage = require("../page_objects/management_plan/management-plan-check.page");
const legalAgreementUploadPage = require("../page_objects/legal_agreement/legal-agreement-upload.page");
const legalAgreementCheckPage = require("../page_objects/legal_agreement/legal-agreement-check.page");
const landBoundaryFileUploadPage = require("../page_objects/land_boundary/image-file.page");
const landBoundaryFileCheckPage = require("../page_objects/land_boundary/image-file-check.page");

let uploadPage = legalAgreementUploadPage;
let CheckPage = legalAgreementCheckPage;

let filename = "";
let filePath = "";
let remoteFilePath = "";

When("I choose and upload a {string}", async (document) => {
  switch (document) {
    case "legal-agreement": {
      uploadPage = legalAgreementUploadPage;
      CheckPage = legalAgreementCheckPage;
      break;
    }
    case "management-plan": {
      uploadPage = managementPlanUploadPage;
      CheckPage = managementPlanCheckPage;
      break;
    }
    case "land-boundary-file": {
      uploadPage = landBoundaryFileUploadPage;
      CheckPage = landBoundaryFileCheckPage;
      break;
    }
  }

  // test file
  filePath = path.join(__dirname, "../../TestFiles/test_12kb.docx");
  remoteFilePath = await browser.uploadFile(filePath);

  // get the filename for assertions
  var group = filePath.split("\\");
  filename = group[group.length - 1];

  // open the upload url page
  browser.url(uploadPage.path);

  await uploadPage.govFileUpload.setValue(remoteFilePath);
  await uploadPage.continueButton.click();
});

Then("There should be a link to download the document", async () => {
  /* BNGP-765 download link not in latest designs, could change so commented
  // wait for file to be uploaded and show an element on the check/confirm page
   await CheckPage.downloadLink.waitForExist({ timeout: 5000 });
   */

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
  const filePath = path.join(__dirname, "../../TestFiles/test.txt");
  const remoteFilePath = await browser.uploadFile(filePath);

  // open the upload url page
  browser.url(uploadPage.path);

  await uploadPage.govFileUpload.setValue(remoteFilePath);
  await uploadPage.continueButton.click();
});

Then("I should not be able to upload the file", async () => {
  // should still be on the upload page instead of the check page
  expect(await browser.getTitle()).not.toContain(CheckPage.titleText);

  // wait for error message
  await uploadPage.errorMsg.waitForExist({ timeout: 5000 });
});

Then("I am informed of what the allowed file types should be", async () => {
  // wait for error message
  await (await uploadPage.errorMsg).waitForDisplayed({ timeout: 5000 });

  let errorTxt = "";

  switch (uploadPage) {
    case landBoundaryFileUploadPage: {
      errorTxt = "The selected file must be a DOC, DOCX, JPG, PNG or PDF";
      break;
    }
    default: {
      errorTxt = "The selected file must be a DOC, DOCX or PDF";
    }
  }

  // check errorMsg text
  await expect(uploadPage.errorMsg).toHaveTextContaining(errorTxt);
});

When("I choose a different file", async () => {
  await CheckPage.radioNo.waitForExist({ timeout: 5000 });
  await CheckPage.radioNo.click();
  await CheckPage.continueButton.click();
});

When("I choose an empty file", async () => {
  filePath = path.join(__dirname, "../../TestFiles/test_1k_empty.pdf");
  remoteFilePath = await browser.uploadFile(filePath);

  // get the filename for assertions
  var group = filePath.split("\\");
  filename = group[group.length - 1];

  // open the upload url page
  browser.url(uploadPage.path);

  await uploadPage.govFileUpload.setValue(remoteFilePath);
  await uploadPage.continueButton.click();
});

Then("The original document should be deleted", async function () {
  return "pending";
});
