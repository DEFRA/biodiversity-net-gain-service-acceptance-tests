const { Given, When, Then } = require("@wdio/cucumber-framework");
const uploads = require("../page_objects/planning-obligation-upload");
let filename = "";

When("I choose and upload a {string}", async (file) => {
  // Todo: switch for specific files (metric, planning obligation etc)
  const filePath = "TestFiles\\test.txt";
  filename = filePath.substring(10);
  const remoteFilePath = await browser.uploadFile(filePath);

  await expect(remoteFilePath).toContain(filename);
  await uploads.govFileUpload.setValue(remoteFilePath);
  await uploads.continueButton.click();

  console.log("The filename is " + filename);
  console.log("The remote filepath is " + remoteFilePath);
});

Then("I should be able to see a link to the document", async () => {
  /* verify correct file has been uploaded
  Grab the filename text that the page displays after processing the upload
  Assert that the filename text matches the filename provided in the test
  */
  const link = await $("#planning-obligation-download");
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
