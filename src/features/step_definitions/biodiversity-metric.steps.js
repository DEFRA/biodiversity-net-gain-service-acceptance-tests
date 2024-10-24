const { Given, When, Then } = require('@wdio/cucumber-framework')
const { join, basename } = require('node:path')
// Import all page objects
const pages = require('../page_objects/page_objects')

let filename = ''
let filePath = ''
let remoteFilePath = ''

When('I choose to upload a {string} metric file', async (version) => {
  
  const uploadPage = pages['metric-upload']
  
  switch (version) {
    case '3.0': {
      filePath = join(__dirname, '../../TestFiles/test_metric_3.0.xlsm')
      break
    }
    case '4.0': {
      filePath = join(__dirname, '../../TestFiles/test_metric_4.0.xlsm')
      break
    }
    case 'Draft 4.1': {
      filePath = join(__dirname, '../../TestFiles/test_metric_draft_4.1.xlsm')
      break
    }
  }

  remoteFilePath = await browser.uploadFile(filePath)
  browser.url(uploadPage.path)

  // get the filename for assertions
  const group = filePath.split('\\')
  filename = basename(group[group.length - 1])

  // set the remote path value to the upload element and continue
  await uploadPage.govFileUpload.setValue(remoteFilePath)
  await uploadPage.uploadButton.click()
})

Then('The total for {string} should be {string}', async (HabitatType, total) => {
  switch (HabitatType) {
    case 'Habitat type and condition': {
      await expect(pages['check-habitat-baseline'].habitatTotal).toHaveText(total)
      break
    }
    case 'Hedgerow type and condition': {
      await expect(pages['check-habitat-baseline'].hedgeTotal).toHaveText(total)
      break
    }
    case 'River type and condition': {
      await expect(pages['check-habitat-baseline'].riverTotal).toHaveText(total)
      break
    }
  }
})

Given('I have completed the biodiversity metric section', async () => {
  await completeBiodiversityMetricSection()
})

async function completeBiodiversityMetricSection () {
  // todo: refine multiple ands
  // And I upload a "metric" file
  //       #And I confirm it is the correct file

  //       And I check the habitat baseline information is correct

  //       And I check the created and enhanced information is correct

  //       And I confirm the check "metric" details are correct

}
