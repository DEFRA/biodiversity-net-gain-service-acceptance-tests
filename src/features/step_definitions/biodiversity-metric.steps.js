const { Given, When } = require('@wdio/cucumber-framework')
const checkOwnershipDetailsPage = require('../page_objects/land_ownership/check-ownership-details.page')
const registeredLandownerPage = require('../page_objects/land_ownership/registered-landowner.page')

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
