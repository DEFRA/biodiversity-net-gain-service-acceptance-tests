const { Given, When } = require("@wdio/cucumber-framework");
// Developer journey 
const DeveloperMetricUploadPage = require("../page_objects/developer/biodiversity-gain-site-number.page");
const DeveloperConfirmDevelopmentDetailsPage = require("../page_objects/developer/metric-confirm-development-details.page");
const DeveloperAdditionalEmails = require("../page_objects/developer/email-entry.page");
const DeveloperCheckAnswersPage = require("../page_objects/developer/check-answers.page");

Given("I enter my off site gain reference number as {string}", async (refNumber) => {
    await DeveloperMetricUploadPage.offSiteReferenceNumber.clearValue();
    await DeveloperMetricUploadPage.offSiteReferenceNumber.addValue(refNumber);
    await (DeveloperMetricUploadPage.continueButton).click();
  })


 Given("I confirm my development details", async () => {
  await DeveloperConfirmDevelopmentDetailsPage.radioYes.waitForExist({ timeout: 5000 });
  await DeveloperConfirmDevelopmentDetailsPage.radioYes.click();
  await DeveloperConfirmDevelopmentDetailsPage.continueButton.click();
 })

 Given("I confirm my off site gain", async () => {
  await DeveloperConfirmDevelopmentDetailsPage.radioYes.waitForExist({ timeout: 5000 });
  await DeveloperConfirmDevelopmentDetailsPage.radioYes.click();
  await DeveloperConfirmDevelopmentDetailsPage.continueButton.click();
 })

 Given("I continue without adding email notifications for additional people", async () => {
  await DeveloperAdditionalEmails.skipAdditionalEmails.click();
 })

 When("I submit my developer information", async() => {
    await DeveloperCheckAnswersPage.continueButton.click();
}) 
