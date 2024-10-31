const { Given, When } = require('@wdio/cucumber-framework')
// Developer journey
const DeveloperMetricUploadPage = require('../page_objects/developer/biodiversity-gain-site-number.page')
const DeveloperConfirmOffSiteGainPage = require('../page_objects/developer/confirm-off-site-gain.page')
const DeveloperAdditionalEmails = require('../page_objects/developer/email-entry.page')
const DevelopmentProjectsPage = require('../page_objects/developer/development-projects.page')
const DeveloperCheckAnswersPage = require('../page_objects/developer/check-answers.page')

const developerCheckAnswersPage = new DeveloperCheckAnswersPage()
const baseUrl = process.env.SERVICE_URL || 'http://localhost:3000'

Given('I enter my off site gain reference number as {string}', async (bngRefNumber) => {
  
  // set the bngRefNumber to use the mock variable if the environment the tests are running on is pre prod  // https://eaflood.atlassian.net/browse/BNGP-5407
  console.log('baserurl = '+ baseUrl)
  if(baseUrl == 'https://dev1-manage-biodiversity-gains.azure.defra.cloud/'){
  // if(baseUrl == 'https://pre2-manage-biodiversity-gains.azure.defra.cloud/'){
    bngRefNumber = 'gFSTO7ZSVI3oglCbbYAn4VMXDZmhMjY1'
  }
  
  await DeveloperMetricUploadPage.offSiteReferenceNumber.clearValue()
  await DeveloperMetricUploadPage.offSiteReferenceNumber.addValue(bngRefNumber)
  await (DeveloperMetricUploadPage.continueButton).click()
})

Given('I confirm my off site gain', async () => {
  // Todo: check totals are correct before continuing
  await DeveloperConfirmOffSiteGainPage.continueButton.click()
})

Given('I continue without adding email notifications for additional people', async () => {
  await DeveloperAdditionalEmails.skipAdditionalEmails.click()
})

When('I submit my developer information', async () => {
  await developerCheckAnswersPage.continueButton.click()
})

When('I choose to record off-site gains for a new development', async () => {
  await DevelopmentProjectsPage.createNewOffSiteDevelopmentGainslink.click()
})
