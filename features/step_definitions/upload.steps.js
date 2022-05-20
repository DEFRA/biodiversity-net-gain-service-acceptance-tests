const { Given, When, Then } = require("@wdio/cucumber-framework");
const uploads = require("../page-objects/planning-obligation-upload");

When("I choose and upload a {string}", async (file) => {
  // Todo: switch for specific files (metric, planning obligation etc)

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
    // this is possibly in the uint tests...
    "pending"
);

When("I choose a different file", async function () {
  return "pending";
});

Then("The original document should be deleted", async function () {
  return "pending";
});
