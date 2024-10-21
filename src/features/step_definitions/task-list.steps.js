const { When, Then } = require('@wdio/cucumber-framework')
const RegisterTaskListPage = require('../page_objects/register-land-task-list.page')
const DeveloperTaskListPage = require('../page_objects/developer/tasklist.page')
const CreditsTaskListPage = require('../page_objects/credits-purchase/tasklist.page')
const CombinedCaseTaskListPage = require('../page_objects/combined_case/tasklist.page.js')

const TaskList = new RegisterTaskListPage()
const developerTaskListPage = new DeveloperTaskListPage()
const creditsTaskListPage = new CreditsTaskListPage()
const combinedCaseTaskListPage = new CombinedCaseTaskListPage()

When('I choose to add {string} details', async (task) => {
  const status = 'Not started'

  switch (task) {
    case 'applicant-info': {
      await expect(TaskList.applicantInfoStatus).toHaveText(status)
      await TaskList.addApplicantInfo.click()
      break
    }
    case 'land-ownership': {
      await expect(TaskList.landOwnershipStatus).toHaveText(status)
      await TaskList.addLandOwnership.click()
      break
    }
    case 'land-boundary': {
      await expect(TaskList.landBoundaryStatus).toHaveText(status)
      await TaskList.addLandBoundary.click()
      break
    }
    case 'metric': {
      await expect(TaskList.metricStatus).toHaveText(status)
      await TaskList.addMetric.click()
      break
    }
    case 'legal-agreement': {
      await expect(TaskList.legalAgreementStatus).toHaveText(status)
      await TaskList.addLegalAgreement.click()
      break
    }
    case 'local-land-charge': {
      await expect(TaskList.localLandChargeStatus).toHaveText(status)
      await TaskList.addLocallandCharge.click()
      break
    }
    case 'check-and-submit': {
      await expect(TaskList.submitStatus).toHaveText(status)
      break
    }
    // Credits
    case 'Statutory biodiversity metric': {
      expect(await browser.getTitle()).toContain(creditsTaskListPage.titleText)
      await creditsTaskListPage.uploadMetric.click()
      break
    }
    case 'Credits Development Information': {
      expect(await browser.getTitle()).toContain(creditsTaskListPage.titleText)
      await creditsTaskListPage.addDevelopmentInformation.click()
      break
    }
    case 'Statutory biodiversity credit': {
      expect(await browser.getTitle()).toContain(creditsTaskListPage.titleText)
      await creditsTaskListPage.addCredits.click()
      break
    }
    case 'Purchase Order': {
      expect(await browser.getTitle()).toContain(creditsTaskListPage.titleText)
      await creditsTaskListPage.addPurchaseOrder.click()
      break
    }
    case 'Customer due diligence': {
      expect(await browser.getTitle()).toContain(creditsTaskListPage.titleText)
      await creditsTaskListPage.addCustomerDueDiligence.click()
      break
    }
    case 'terms and conditions': {
      expect(await browser.getTitle()).toContain(creditsTaskListPage.titleText)
      await creditsTaskListPage.acceptTermsAndConditions.click()
      break
    }
    // Allocation
    case 'biodiversity gain site information': {
      expect(await browser.getTitle()).toContain(developerTaskListPage.titleText)
      await developerTaskListPage.addBiodiversityGainSiteInfo.click()
      break
    }
    case 'developer-applicant-info': {
      expect(await browser.getTitle()).toContain(developerTaskListPage.titleText)
      await developerTaskListPage.addapplicantDetails.click()
      break
    }
    case 'Development Project': {
      expect(await browser.getTitle()).toContain(developerTaskListPage.titleText)
      await developerTaskListPage.addDevelopmentInformation.click()
      break
    }
    case 'planning decision notice': {
      expect(await browser.getTitle()).toContain(developerTaskListPage.titleText)
      await developerTaskListPage.addPlanningDecisionNoticeInfo.click()
      break
    }
    // Combined case - reg
    case 'combined-case-applicant-info': {
      await expect(combinedCaseTaskListPage.applicantInfoStatus).toHaveText(status)
      await combinedCaseTaskListPage.addApplicantInfo.click()
      break
    }
    case 'combined-case-land-ownership': {
      await expect(combinedCaseTaskListPage.landOwnershipStatus).toHaveText(status)
      await combinedCaseTaskListPage.addLandOwnership.click()
      break
    }
    case 'combined-case-land-boundary': {
      await expect(combinedCaseTaskListPage.landBoundaryStatus).toHaveText(status)
      await combinedCaseTaskListPage.addLandBoundary.click()
      break
    }
    case 'combined-case-metric': {
      await expect(combinedCaseTaskListPage.metricStatus).toHaveText(status)
      await combinedCaseTaskListPage.addMetric.click()
      break
    }
    case 'combined-case-legal-agreement': {
      await expect(combinedCaseTaskListPage.legalAgreementStatus).toHaveText(status)
      await combinedCaseTaskListPage.addLegalAgreement.click()
      break
    }
    case 'combined-case-local-land-charge': {
      await expect(combinedCaseTaskListPage.localLandChargeStatus).toHaveText(status)
      await combinedCaseTaskListPage.addLocallandCharge.click()
      break
    }
    // Combined case - allocation
    case 'combined case planning decision notice': {
      await expect(combinedCaseTaskListPage.addPlanningDecisionNoticeStatus).toHaveText(status)
      await combinedCaseTaskListPage.addPlanningDecisionNoticeInfo.click()
      break
    }

    case 'match available habitat': {
      expect(await browser.getTitle()).toContain(combinedCaseTaskListPage.titleText)
      await combinedCaseTaskListPage.addMatchAvailableHabitats.click()
      break
    }

    case 'combined case Development Project': {
      expect(await browser.getTitle()).toContain(combinedCaseTaskListPage.titleText)
      await combinedCaseTaskListPage.addDevelopmentInformation.click()
      break
    }
    case 'combined-case-check-and-submit': {
      await expect(combinedCaseTaskListPage.submitStatus).toHaveText(status)
      break
    }
    default:{
      throw new Error(`Tasklist section ${task} doesn't exist`)
    }
  }
})

When('I confirm I have completed all {string} journey sections', async (journey) => {
  switch (journey) {
    case 'developer':{
      await expect(developerTaskListPage.submitStatus).not.toHaveText('Cannot start yet')
      await expect(developerTaskListPage.submitStatus).toHaveText('Not started yet')
      await developerTaskListPage.devCheckAndSubmitBtn.click()
      break
    }
    case 'landowner':{
      // /make sure cannot start status for the cya section has changed to Not started yet
      await expect(TaskList.submitStatus).not.toHaveText('Cannot start yet')
      await expect(TaskList.submitStatus).toHaveText('Not started yet')
      await (TaskList.checkAndSubmitBtn).click()
      break
    }
    case 'credits':{
    // /make sure cannot start status for the cya section has changed to Not started yet
      await expect(creditsTaskListPage.submitStatus).not.toHaveText('Cannot start yet')
      await expect(creditsTaskListPage.submitStatus).toHaveText('Not started yet')
      await (creditsTaskListPage.checkAndSubmitBtn).click()
      break
    }
    case 'combined-case':{
    // /make sure cannot start status for the cya section has changed to Not started yet
      await expect(combinedCaseTaskListPage.submitStatus).not.toHaveText('Cannot start yet')
      await expect(combinedCaseTaskListPage.submitStatus).toHaveText('Not started yet')
      await (combinedCaseTaskListPage.checkAndSubmitBtn).click()
      break
    }
    default:{
      throw new Error(`The journey entered ${journey} doesn't exist`)
    }
  }
})

Then('I should see my progress as {string}', async (value) => {
  await expect(TaskList.progressText).toHaveText(value)
})

Then('I should see the {string} section status as {string}', async (task, status) => {
  switch (task) {
    case 'details': {
      await expect(TaskList.detailsStatus).toHaveText(status)
      break
    }
    case 'land-ownership': {
      await expect(TaskList.landOwnershipStatus).toHaveText(status)
      break
    }
    case 'land-boundary': {
      await expect(TaskList.landBoundaryStatus).toHaveText(status)
      break
    }
    case 'metric': {
      await expect(TaskList.metricStatus).toHaveText(status)
      break
    }
    case 'legal-agreement': {
      await expect(TaskList.legalAgreementStatus).toHaveText(status)
      break
    }
    case 'local-land-charge': {
      await expect(TaskList.legalAgreementStatus).toHaveText(status)
      break
    }
    case 'check-and-submit': {
      await expect(TaskList.submitStatus).toHaveText(status)
      break
    }
    // developer journey tasklist sections
    case 'biodiversity gain site information': {
      await expect(developerTaskListPage.addBiodiversityGainSiteInfoStatus).toHaveText(status)
      break
    }
    case 'developer-applicant-info': {
      await expect(developerTaskListPage.addapplicantDetailsStatus).toHaveText(status)
      break
    }
    case 'Development Project': {
      await expect(developerTaskListPage.addDevelopmentInformationStatus).toHaveText(status)
      break
    }
    case 'planning decision notice': {
      await expect(developerTaskListPage.addPlanningDecisionNoticeStatus).toHaveText(status)
      break
    }

    // credit purchase journey tasklist sections
    case 'credits-purchase-metric': {
      expect(await browser.getTitle()).toContain(creditsTaskListPage.titleText)
      await expect(creditsTaskListPage.uploadMetricStatus).toHaveText(status)
      break
    }
    case 'add-credits': {
      await expect(creditsTaskListPage.addCreditsStatus).toHaveText(status)
      break
    }
    case 'purchase-order': {
      await expect(creditsTaskListPage.addPurhaseOrderStatus).toHaveText(status)
      break
    }
    case 'customer-due-diligence': {
      await expect(creditsTaskListPage.addCustomerDueDiligenceStatus).toHaveText(status)
      break
    }
    case 'terms-and-conditions': {
      await expect(creditsTaskListPage.acceptTermsAndConditionsStatus).toHaveText(status)
      break
    }
    // combined case
    case 'combined-case-metric': {
      await expect(combinedCaseTaskListPage.metricStatus).toHaveText(status)
      break
    }
    default:{
      throw new Error(`Tasklist section ${task} doesn't exist`)
    }
  }
})
