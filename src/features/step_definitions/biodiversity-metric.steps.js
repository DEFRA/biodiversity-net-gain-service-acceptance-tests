const { Given, Then } = require('@wdio/cucumber-framework')
const basePage = require('../page_objects/metric/check-habitat-baseline.page')
// use basepage to cover both check-habitat-baseline.page and check-habitat-created.page

Then("The total for {string} should be {string}", async (HabitatType, total) => {
  switch (HabitatType) {
    case "Habitat type and condition": {
      await expect(basePage.habitatTotal).toHaveTextContaining(total);
      break;
    }
    case "Hedgerow type and condition": {
      await expect(basePage.hedgeTotal).toHaveTextContaining(total);
      break;
    }
    case "River type and condition": {
      await expect(basePage.riverTotal).toHaveTextContaining(total);
      break;
    }
  }
})

Given('I have completed the biodiversity metric section', async () => {
  await completeBiodiversityMetricSection()
})

async function completeBiodiversityMetricSection () {
  // And I choose and upload a "metric" file
  //       And I confirm it is the correct file

  //       And I check the habitat baseline information is correct

  //       And I check the created and enhanced information is correct

  //       And I confirm the check "metric" details are correct

}
