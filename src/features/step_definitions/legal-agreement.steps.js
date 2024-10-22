const { Given, When, Then } = require('@wdio/cucumber-framework')

const LegalAgreementAddPartiesPage = require('../page_objects/legal_agreement/add-legal-agreement-parties.page.js')
const LegalAgreementCheckAddedAllFilesPage = require('../page_objects/legal_agreement/check-you-added-all-legal-files.page.js')
const CheckLegalAgreementDetailsPage = require('../page_objects/legal_agreement/check-legal-agreement-details.page.js')
const LegalPartyListPage = require('../page_objects/legal_agreement/legal-party-list.page.js')
const RegisterTaskListPage = require('../page_objects/register-land-task-list.page.js')
const NeedAddAllLegalFilesPage = require('../page_objects/legal_agreement/planning_obligation/need-add-all-legal-files.page.js')
const NeedAddAllLegalFilesCCPage = require('../page_objects/legal_agreement/conservation_covenant/need-add-all-legal-files-cc.page.js')
const NeedAddAllResponsibleBodies = require('../page_objects/legal_agreement/conservation_covenant/need-add-all-responsible-bodies.page.js')
const AddResponsibleBodyConservationCovenantPage = require('../page_objects/legal_agreement/conservation_covenant/add-responsible-body-cc.page.js')
const CheckResponsibleBodiesPage = require('../page_objects/legal_agreement/conservation_covenant/check-responsible-bodies-cc.page.js')
const LegalPartyAddTypePage = require('../page_objects/legal_agreement/legal-party-add-type.page.js')
const AddLandownerIndividualCCPage = require('../page_objects/legal_agreement/conservation_covenant/add-landowner-individual-conservation-covenant.page.js')
const AddLandownerOrganisationCCPage = require('../page_objects/legal_agreement/conservation_covenant/add-landowner-organisation-conservation-covenant.page.js')
const NeedAddAllLandownersCCPage = require('../page_objects/legal_agreement/conservation_covenant/need-add-all-landowners-cc.page.js')
const NeedAddAllLandownersS106Page = require('../page_objects/legal_agreement/planning_obligation/need-add-all-landowners.page.js')
const LandownerIndividualOrOrganisationCCPage = require('../page_objects/legal_agreement/conservation_covenant/landowner-cc-individual-organisation.page.js')
const LandownerIndividualOrganisationS106Page = require('../page_objects/legal_agreement/planning_obligation/landowner-individual-organisation.page.js')
const LegalAgreementRemoveFilePage = require('../page_objects/legal_agreement/remove-legal-agreement-file.page.js')
const LegalAgreementCheckLandownersPage = require('../page_objects/legal_agreement/check-landowners.page.js')
const HabitatPlanLegalAgreementPage = require('../page_objects/management_plan/habitat-plan-legal-agreement.page.js')
const EnhancementWorksStartDatePage = require('../page_objects/management_plan/enhancement-works-start-date.page.js')
const LegalAgreementEndDatePage = require('../page_objects/legal_agreement/habitat-enhancements-end-date.page.js')
const LegalAgreementAnyOtherLandownersPage = require('../page_objects/legal_agreement/any-other-landowners.page.js')
const ApplicantDetailsEmailpage = require('../page_objects/applicant_details/email.page.js')
const NeedAddAllPlanningAuthoritiesPage = require('../page_objects/legal_agreement/planning_obligation/need-add-all-planning-authorities.page.js')
const AddPlanningAuthorityPage = require('../page_objects/legal_agreement/planning_obligation/add-planning-authority.page.js')

const legalAgreementAddPartiesPage = new LegalAgreementAddPartiesPage()
const legalAgreementCheckAddedAllFilesPage = new LegalAgreementCheckAddedAllFilesPage()
const checkLegalAgreementDetailsPage = new CheckLegalAgreementDetailsPage()
const legalPartyListPage = new LegalPartyListPage()
const TaskList = new RegisterTaskListPage()
const needAddAllLegalFilesPage = new NeedAddAllLegalFilesPage()
const needAddAllLegalFilesCCPage = new NeedAddAllLegalFilesCCPage()
const needAddAllResponsibleBodies = new NeedAddAllResponsibleBodies()
const addResponsibleBodyConservationCovenantPage = new AddResponsibleBodyConservationCovenantPage()
const checkResponsibleBodiesPage = new CheckResponsibleBodiesPage()
const legalPartyAddTypePage = new LegalPartyAddTypePage()
const addLandownerIndividualCCPage = new AddLandownerIndividualCCPage()
const addLandownerOrganisationCCPage = new AddLandownerOrganisationCCPage()
const needAddAllLandownersCCPage = new NeedAddAllLandownersCCPage()
const needAddAllLandownersS106Page = new NeedAddAllLandownersS106Page()
const landownerIndividualOrOrganisationCCPage = new LandownerIndividualOrOrganisationCCPage()
const landownerIndividualOrganisationS106Page = new LandownerIndividualOrganisationS106Page()
const legalAgreementRemoveFilePage = new LegalAgreementRemoveFilePage()
const legalAgreementCheckLandownersPage = new LegalAgreementCheckLandownersPage()
const habitatPlanLegalAgreementPage = new HabitatPlanLegalAgreementPage()
const enhancementWorksStartDatePage = new EnhancementWorksStartDatePage()
const legalAgreementEndDatePage = new LegalAgreementEndDatePage()
const legalAgreementAnyOtherLandownersPage = new LegalAgreementAnyOtherLandownersPage()
const applicantDetailsEmailpage = new ApplicantDetailsEmailpage()
const needAddAllPlanningAuthoritiesPage = new NeedAddAllPlanningAuthoritiesPage()
const addPlanningAuthorityPage = new AddPlanningAuthorityPage()

const basePage = new LegalAgreementAddPartiesPage()

Given('I have completed the legal-agreement section', async () => {
  await completeLegalAgreementSection('legal party 1', 'landowner@email.com')
})

Given('I am informed I have to add all {string} files', async (legalType) => {
  await $('h1').waitForExist({ timeout: 5000 })

  switch (legalType) {
    case 'Conservation covenant': {
      expect(await browser.getTitle()).toContain(needAddAllLegalFilesCCPage.titleText)
      await needAddAllLegalFilesCCPage.continueButton.click()
      break
    }
    case 'Planning obligation': {
      expect(await browser.getTitle()).toContain(needAddAllLegalFilesPage.titleText)
      await needAddAllLegalFilesPage.continueButton.click()
      break
    }
    default:{
      throw new Error('Legaltype ' + legalType + " doesn't exist")
    }
  }
})

Given('I am informed I have to add all {string} details', async (compliance) => {
  await $('h1').waitForExist({ timeout: 5000 })
  
  const pageTitleText = await $('h1').getText();

  switch (compliance) {
    case 'Local planning authority': {
      await expect(pageTitleText).toContain(needAddAllPlanningAuthoritiesPage.titleText)
      await needAddAllPlanningAuthoritiesPage.continueButton.click()
      break
    }
    default:{
      throw new Error('Legal compliance section ' + compliance + " doesn't exist")
    }
  }
})

When('I add the local planning authority as {string}', async (lpa) => {
  // add lpa
  await addPlanningAuthorityPage.localPlanningAuthority.addValue(lpa)
})

When('I choose to add another legal party of {string} with a role of {string}', async (fullname, role) => {
  // assert against the page title
  await $('h1').waitForExist({ timeout: 5000 })
  expect(await browser.getTitle()).toContain(legalPartyListPage.titleText)
  // select to add another legal party
  await legalPartyListPage.radioYes.click()
  await legalPartyListPage.continueButton.click()

  // add another legal party
  await addLegalParty(fullname, role)
})

Then('I can should see the number of legal parties in the title as {string}', async (number) => {
  await $('h1').waitForExist({ timeout: 5000 })

  // assert against the page title
  expect(await browser.getTitle()).toContain(number)
})

When('I confirm the legal party role as a {string}', async (role) => {
  await legalAgreementAddPartiesPage.addLegalPartyRole(role)
  await legalAgreementAddPartiesPage.continueButton.click()
})

When('I add a legal party role as a {string}', async (role) => {
  await legalAgreementAddPartiesPage.addLegalPartyRole(role)
})

// When("I add the legal party fullname or organisation as {string}", async (fullname) => {
//   // await addLegalPartyFullName(fullname);
// })

When('I confirm all legal agreement files are added', async () => {
  await confirmLegalFilesAllAdded('radioYes')
})

When('I add the responsible body {string} listed on the legal agreement', async (fullname) => {
  await addResponsibleBody(fullname)
  // And I choose that I have added all responsible bodies
  await confirmResponsibleBodiesAllAdded('radioYes')
})

When('I add another landowners or leaseholders as an organisation listed on the legal agreement', async () => {
  // And I choose to confirm that the leasholder or lanowner listed on the conservation covenant is an organisation
  await checkPageTitle(landownerIndividualOrOrganisationCCPage.titleText, landownerIndividualOrOrganisationCCPage)
  await selectOptionAndContinue('radioOrganisation', landownerIndividualOrOrganisationCCPage)
})

When('I confirm other landowners or leaseholders are listed on the legal agreement as {string}', async (confirm) => {
  if (confirm == 'true') {
    confirm = 'radioYes'
  } else if (confirm == 'false') {
    confirm = 'radioNo'
  }

  await confirmOtherLandownersAllAdded(confirm)
})

async function completeLegalAgreementSection (fullname, landownerEmailAddress) {
  try {
  //* *** Conservation Covenant default at the moment ****
  // And I confirm all legal agreement files are added
    await confirmLegalFilesAllAdded('radioYes')

    //  // And I choose that the landowner or leaseholder is an organisation
    //  await legalPartyAddTypePage.radioOrganisation.click();
    //  await legalPartyAddTypePage.continueButton.click();

    // And I add the responsible body listed on the conservation covenant
    await addResponsibleBody(fullname)

    // And I choose that I have added all responsible bodies
    await confirmResponsibleBodiesAllAdded('radioYes')

    // And I am confirm if any other landowners or leaseholders are listed on the "legal agreement"
    await confirmOtherLandownersAllAdded('radioYes')

    // And I choose to confirm that the leasholder or lanowner listed on the conservation covenant is an organisation
    await checkPageTitle(landownerIndividualOrOrganisationCCPage.titleText, landownerIndividualOrOrganisationCCPage)
    await selectOptionAndContinue('radioOrganisation', landownerIndividualOrOrganisationCCPage)

    // And I add the landholder or leaseholders organisation name and email address
    await addOrganisationName(fullname)
    await applicantDetailsEmailpage.addEmailAddress(landownerEmailAddress)

    await checkPageTitle(legalAgreementCheckLandownersPage.titleText, legalAgreementCheckLandownersPage)
    await selectOptionAndContinue('radioYes', legalAgreementCheckLandownersPage)

    // Is the habitat managenment plan included in the legal agreement
    await isHabitatMgtPlanIncluded('radioYes')

    // have the habitat enhancement works started yet
    await haveHabitatEnhancementWorksStarted('radioNo')

    // does the legal agrement have an end date?
    await hasStartDate('radioNo')

    // // And I enter a valid "legal agreement start" date of "<legal-agreement start date>"
    // await basePage.enterValidDate(date);

    // And I confirm the check "legal agreement" details are correct
    // confirm on the cya page
    await (checkLegalAgreementDetailsPage.acceptBtn).click()

    // tasklist section shows as complete
    await expect(TaskList.legalAgreementStatus).toHaveText('Completed')
  } catch (error) {
    console.error(`Error in completing the legal agreement section: ${error.message}`)
    throw error // Optionally rethrow the error to propagate it
  }
}

async function hasStartDate (option) {
  await checkPageTitle(legalAgreementEndDatePage.titleText, legalAgreementEndDatePage)
  await selectOptionAndContinue(option, legalAgreementEndDatePage)
}

async function haveHabitatEnhancementWorksStarted (option) {
  await checkPageTitle(enhancementWorksStartDatePage.titleText, enhancementWorksStartDatePage)
  await selectOptionAndContinue(option, enhancementWorksStartDatePage)
}

async function isHabitatMgtPlanIncluded (option) {
  await checkPageTitle(habitatPlanLegalAgreementPage.titleText, habitatPlanLegalAgreementPage)
  await selectOptionAndContinue(option, habitatPlanLegalAgreementPage)
}

async function confirmOtherLandownersAllAdded (option) {
  await checkPageTitle(legalAgreementAnyOtherLandownersPage.titleText, legalAgreementAnyOtherLandownersPage)
  await selectOptionAndContinue(option, legalAgreementAnyOtherLandownersPage)
}

async function confirmResponsibleBodiesAllAdded (option) {
  //await checkPageTitle(checkResponsibleBodiesPage.titleText, checkResponsibleBodiesPage)
  await selectOptionAndContinue(option, checkResponsibleBodiesPage)
}

async function confirmLegalFilesAllAdded (option) {
  await checkPageTitle(legalAgreementCheckAddedAllFilesPage.titleText)
  await selectOptionAndContinue(option, legalAgreementCheckAddedAllFilesPage)
}

async function checkPageTitle (expectedTitle) {
  await $('h1').waitForExist({ timeout: 5000 })
  expect(await browser.getTitle()).toContain(expectedTitle)
}

// Helper function to select an option and continue
async function selectOptionAndContinue (option, pageObject) {
  await pageObject[option].click()
  await pageObject.continueButton.click()
}

async function addResponsibleBody (fullname) {
  // And I am informed that I have to add all responsible bodies to the legal agreement
 // await checkPageTitle(needAddAllResponsibleBodies.titleText, needAddAllResponsibleBodies)
  await needAddAllResponsibleBodies.continueButton.click()

  // // assert against the page title
  // await $('h1').waitForExist({ timeout: 5000 })
  // expect(await browser.getTitle()).toContain(addResponsibleBodyConservationCovenantPage.titleText)

  // Add a conservation covenant responsible body
  await addResponsibleBodyConservationCovenantPage.responsibleBodyName.addValue(fullname)

  // continue
  await addResponsibleBodyConservationCovenantPage.continueButton.click()
}

async function addOrganisationName (fullname) {
  // assert against the page title
  await $('h1').waitForExist({ timeout: 5000 })
  expect(await browser.getTitle()).toContain(addLandownerOrganisationCCPage.titleText)

  // add the organisation name
  await addLandownerOrganisationCCPage.organisationName.addValue(fullname)

  // continue
  await addLandownerOrganisationCCPage.continueButton.click()
}
