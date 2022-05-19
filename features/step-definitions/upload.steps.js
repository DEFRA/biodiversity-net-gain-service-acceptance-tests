const { Given, When, Then } = require("@wdio/cucumber-framework");
const uploads = require("../page-objects/planning-obligation-upload");

When("I choose and upload a valid file", async () => {
  const path = require("path");

  const filePath = "TestFiles\\test.txt";
  const remoteFilePath = await browser.uploadFile(filePath);

  await uploads.govFileUpload.setValue(remoteFilePath);
  await uploads.continueButton.click();

  console.log("The remote fielpath is" + remoteFilePath);
});

Then(
  "I should be able to see a link to the document",
  async () =>
    /* Todo: to verify correct file has been uploaded?
    Is this worth it?
    could just be visual to make sure it is present.
    */

    "pending"
);

Then(
  "I should be able to see the filesize of the document",
  async () =>
    // Todo: again is this worth it, could just e visual to make sure its present.
    "pending"
);

Given(/^I have uploaded the (.*)$/, async (document) => {
  // Todo:  switch statment for particular doc?

  // go through steps to upload the planning obligation
  // go to the upload page
  // then select the file
  // then continue
  "pending";
});
