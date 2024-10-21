const { Given, When, Then } = require('@wdio/cucumber-framework')
const checkManagementMonitoringDetailsPage = require('../page_objects/management_plan/check-management-monitoring-details.page')
const monitoringStartDatePage = require('../page_objects/management_plan/monitoring-start-date.page')
const tasklistPage = require('../page_objects/register-land-task-list.page')
const basePage = monitoringStartDatePage

Given('I have Completed the management-plan section', async () => {
  await completeManagementPlanSection('13/10/2022')
})

Then('I should be able to enter a valid 30 year monitoring start date of {string}', async (date) => {
  await enter30YearMonitoringStartDate(date)
})

async function enter30YearMonitoringStartDate (date) {
  await basePage.enterValidDate(date)
  await expect(monitoringStartDatePage.errorMsg).not.toBeDisplayed()
}

async function completeManagementPlanSection (date) {
  // removed in https://eaflood.atlassian.net/browse/BNGP-3141
  // And I enter a valid "start" date of "<hmmp start date>"
  // await basePage.enterValidDate(date);

  // And I enter a valid "30 year monitoring start" date of "<30 year monitor date>"
  await enter30YearMonitoringStartDate(date)

  // confirm on the cya page
  await (checkManagementMonitoringDetailsPage.continueButton).click()

  // tasklist section shows as complete
  await expect(tasklistPage.hmmpStatus).toHaveText('Completed')
}
