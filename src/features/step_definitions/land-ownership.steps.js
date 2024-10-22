const { Given } = require('@wdio/cucumber-framework')
const RegisterTaskListPage = require('../page_objects/register-land-task-list.page')
const CombinedCaseTaskListPage = require('../page_objects/combined_case/tasklist.page')
const LandOwnershipProofListPage = require('../page_objects/land_ownership/ownership-proof-list.page')
const CombinedCaseLandOwnershipProofListPage = require('../page_objects/combined_case/land_ownership/ownership-proof-list.page')
const COMPLETED_STATUS_TEXT = 'Completed'

// Given step definition
Given('I have completed the {string} land-ownership section', async (journey) => {
  await completeLandOwnershipSection(journey)
})

async function completeLandOwnershipSection (journey) {
  switch (journey) {
    case 'combined-case':
      await completeProofOfLandOwnership(
        new CombinedCaseLandOwnershipProofListPage(),
        new CombinedCaseTaskListPage(),
        new CombinedCaseTaskListPage().landOwnershipStatus
      )
      break
    default:
      await completeProofOfLandOwnership(
        new LandOwnershipProofListPage(),
        new RegisterTaskListPage(),
        new RegisterTaskListPage().landOwnershipStatus
      )
      break
  }
}

async function completeProofOfLandOwnership (landOwnershipPage, taskListPage, statusElement) {
  // Ensure the correct page has loaded
  await $('h1').waitForExist({ timeout: 5000 })
  expect(await browser.getTitle()).toContain(landOwnershipPage.titleText)

  await landOwnershipPage.radioYes.click()
  await landOwnershipPage.continueButton.click()

  expect(await browser.getTitle()).toContain(taskListPage.titleText)
  await expect(statusElement).toHaveText(COMPLETED_STATUS_TEXT)
}
