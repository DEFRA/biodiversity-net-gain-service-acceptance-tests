const { When, Then } = require("@wdio/cucumber-framework");
const upload = require("../page_objects/planning-obligation-upload.page");
const uploadCheck = require("../page_objects/planning-obligation-check.page");
let filename = "";

When("I choose and upload a {string}", async (file) => {
  // Todo: switch for specific files (metric, planning obligation etc)
  const filePath = "src\\TestFiles\\test.txt";
  filename = filePath.substring(14);
  const remoteFilePath = await browser.uploadFile(filePath);

  await expect(remoteFilePath).toContain(filename);
  await upload.govFileUpload.setValue(remoteFilePath);
  await upload.continueButton.click();

  console.log("The filename is " + filename);
  console.log("The remote filepath is " + remoteFilePath);
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
  await upload.radioNo.click();
  await upload.continueButton.click();
});

Then("The original document should be deleted", async function () {
  return "pending";
});
