const { When, Then } = require("@wdio/cucumber-framework");
const uploadPage = require("../page_objects/legal_agreement/legal-agreement-upload.page");
const uploadCheckPage = require("../page_objects/legal_agreement/legal-agreement-check.page");

const path = require("path");

let filename = "";
let filePath = "";
let remoteFilePath = "";

When("I choose and upload a {string}", async (document) => {
  switch (document) {
    case "legal agreement": {
      filePath = path.join(__dirname, "../../TestFiles/test.pdf");
      remoteFilePath = await browser.uploadFile(filePath);

      // get the filename for assertions
      var group = filePath.split("\\");
      filename = group[group.length - 1];

      // open the upload url page
      browser.url(uploadPage.path);

      await uploadPage.govFileUpload.setValue(remoteFilePath);
      await uploadPage.continueButton.click();

      // wait for file to be uploaded and show an element on the check/confirm page
      await uploadCheckPage.downloadLink.waitForExist({ timeout: 5000 });

      break;
    }
  }
});

Then("There should be a link to download the document", async () => {
  /* verify correct file has been uploaded
  Grab the filename text that the page displays after processing the upload
  Assert that the filename text matches the filename provided in the test
  */
  const link = await uploadCheckPage.downloadLink;
  await expect(link).toHaveText(filename);
});

Then("I should be able to see the filesize of the document", async () => {
  //todo get actual filesize if not in unit tests
  expect(
    (await (await uploadCheckPage.filesizeIndicator).getText()).length
  ).not.toBe(0);
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
  // wait for error message
  await uploadPage.errorMsg.waitForExist({ timeout: 5000 });

  // should still be on the upload page instead of the check page
  expect(await browser.getTitle()).toContain(uploadPage.titleText);
});

Then("I am informed of what the allowed file types should be", async () => {
  // wait for error message
  await uploadPage.errorMsg.waitForExist({ timeout: 5000 });

  // check errorMsg text
  await expect(uploadPage.errorMsg).toHaveText(
    "The selected file must be a DOC, DOCX or PDF"
  );
});

When("I choose a different file", async () => {
  await uploadCheckPage.radioNo.waitForExist({ timeout: 5000 });
  await uploadCheckPage.radioNo.click();
  await uploadCheckPage.continueButton.click();
});

Then("The original document should be deleted", async function () {
  return "pending";
});
