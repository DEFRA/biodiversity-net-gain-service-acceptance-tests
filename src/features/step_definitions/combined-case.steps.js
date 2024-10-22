const { Given, When, Then } = require('@wdio/cucumber-framework')
const CombinedCaseApplicationListPage = require('../page_objects/combined_case/combined-case-projects.page.js')
const combinedCaseApplicationListPage = new CombinedCaseApplicationListPage()

const CombinedCaseMatchHabitatsPage = require('../page_objects/combined_case/match-habitats.page.js')
const combinedCaseMatchHabitatsPage = new CombinedCaseMatchHabitatsPage()

const CombinedCaseMatchAllocationSummaryPage = require('../page_objects/combined_case/match-allocation-summary.page.js')
const combinedCaseMatchAllocationSummaryPage = new CombinedCaseMatchAllocationSummaryPage()

When('I choose to register a gain site and allocate to a development', async () => {
  // assert against the page title
  // await $("h1").waitForExist({ timeout: 5000 });
  expect(await browser.getTitle()).toContain(combinedCaseApplicationListPage.titleText)

  await combinedCaseApplicationListPage.registerNewGainSiteAndAllocateLink.click()
})

When('I match my habitats', async () => {
  expect(await browser.getTitle()).toContain(combinedCaseMatchHabitatsPage.titleText)

  await combinedCaseMatchHabitatsPage.radioMatch1.click()
  await combinedCaseMatchHabitatsPage.continueButton.click()

  expect(await browser.getTitle()).toContain(combinedCaseMatchHabitatsPage.titleText)

  await combinedCaseMatchHabitatsPage.radioMatch1.click()
  await combinedCaseMatchHabitatsPage.continueButton.click()

  expect(await browser.getTitle()).toContain(combinedCaseMatchHabitatsPage.titleText)

  await combinedCaseMatchHabitatsPage.radioMatch1.click()
  await combinedCaseMatchHabitatsPage.continueButton.click()

  expect(await browser.getTitle()).toContain(combinedCaseMatchAllocationSummaryPage.titleText)
  await combinedCaseMatchAllocationSummaryPage.continueButton.click()
})
