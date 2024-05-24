const { Given, When, Then } = require('@wdio/cucumber-framework')
const { join, basename } = require("node:path");
const basePage = require('../page_objects/metric/check-habitat-baseline.page')
// use basepage to cover both check-habitat-baseline.page and check-habitat-created.page
const UploadPage = require("../page_objects/metric/metric-upload.page");
const CheckPage = require("../page_objects/metric/metric-check.page");

let filename = "";
let filePath = "";
let remoteFilePath = "";

When("I choose to upload a {string} metric file", async (version) => {

  switch (version) {
    case "3.0": {
      filePath = join(__dirname, "../../TestFiles/test_metric_3.0.xlsm");
      break;
    }
    case "4.0": {
      filePath = join(__dirname, "../../TestFiles/test_metric_4.0.xlsm");
      break;
    }
    case "Draft 4.1": {
      filePath = join(__dirname, "../../TestFiles/test_metric_draft_4.1.xlsm");
      break;
    }
  }

  remoteFilePath = await browser.uploadFile(filePath);

  // get the filename for assertions
  var group = filePath.split("\\");
  filename = basename(group[group.length - 1]);

  // set the remote path value to the upload element and continue
  await UploadPage.govFileUpload.setValue(remoteFilePath);
  await UploadPage.uploadButton.click();

})

Then("The total for {string} should be {string}", async (HabitatType, total) => {
  switch (HabitatType) {
    case "Habitat type and condition": {
      await expect(basePage.habitatTotal).toHaveText(total);
      break;
    }
    case "Hedgerow type and condition": {
      await expect(basePage.hedgeTotal).toHaveText(total);
      break;
    }
    case "River type and condition": {
      await expect(basePage.riverTotal).toHaveText(total);
      break;
    }
  }
})

Given('I have completed the biodiversity metric section', async () => {
  await completeBiodiversityMetricSection()
})

async function completeBiodiversityMetricSection () {
  // todo: refine multiple ands
  //And I choose and upload a "metric" file
  //       And I confirm it is the correct file

  //       And I check the habitat baseline information is correct

  //       And I check the created and enhanced information is correct

  //       And I confirm the check "metric" details are correct

}
