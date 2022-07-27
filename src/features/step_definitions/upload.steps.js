const { When, Then } = require("@wdio/cucumber-framework");
const uploads = require("../page_objects/planning-obligation-upload.page");
const uploadCheck = require("../page_objects/planning-obligation-check.page");
let filename = "";
let filePath = "src\\TestFiles\\";
let remoteFilePath = "";

When("I choose and upload a {string}", async (file) => {
  // Todo: switch for specific files (metric, planning obligation etc)
  switch (file) {
    case "planning obligation":
      filePath = filePath + "test.txt";
      filename = filePath.substring(14);
      remoteFilePath = await browser.uploadFile(filePath);

      expect(remoteFilePath).toContain(filename);
      await uploads.govFileUpload.setValue(remoteFilePath);
      await uploads.continueButton.click();

      console.log("The filename is " + filename);
      console.log("The remote filepath is " + remoteFilePath);
      break;
  }
});

When("I have uploaded and checked a {string}", function (string) {
  return "pending";
});

Then("There should be a link to download the document", async () => {
  /* verify correct file has been uploaded
  Grab the filename text that the page displays after processing the upload
  Assert that the filename text matches the filename provided in the test
  */
  const link = await uploadCheck.downloadLink;
  await expect(link).toHaveText(filename);
});

Then("I should be able to see the filesize of the document", async () => {
  return "pending";
});

When("I choose a different file", async () => {
  await uploads.radioNo.click();
  await uploads.continueButton.click();
});

Then("The original document should be deleted", async function () {
  return "pending";
});
