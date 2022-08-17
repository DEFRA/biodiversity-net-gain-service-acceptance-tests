const { When, Then } = require("@wdio/cucumber-framework");
const uploadPage = require("../page_objects/legal_agreement/legal-agreement-upload.page");
const CheckPage = require("../page_objects/legal_agreement/legal-agreement-check.page");

const path = require("path");

let filename = "";
let filePath = "";
let remoteFilePath = "";

When("I choose and upload a {string}", async (document) => {
  switch (document) {
    case "legal agreement": {
      filePath = path.join(__dirname, "../../TestFiles/test_12kb.docx");
      remoteFilePath = await browser.uploadFile(filePath);

      // get the filename for assertions
      var group = filePath.split("\\");
      filename = group[group.length - 1];

      // open the upload url page
      browser.url(uploadPage.path);

      await uploadPage.govFileUpload.setValue(remoteFilePath);
      await uploadPage.continueButton.click();

      // wait for file to be uploaded and show an element on the check/confirm page
      await CheckPage.downloadLink.waitForExist({ timeout: 5000 });

      break;
    }
  }
});

Then("There should be a link to download the document", async () => {
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
  // get actual filesize if not in unit tests
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

  // check errorMsg text
  await expect(uploadPage.errorMsg).toHaveTextContaining(
    "The selected file must be a DOC, DOCX or PDF"
  );
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
