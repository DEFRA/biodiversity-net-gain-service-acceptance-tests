const { Given, When, Then } = require('@wdio/cucumber-framework');

const legalAgreementAddPartiesPage = require("../page_objects/legal_agreement/add-legal-agreement-parties.page.js");
const checkLegalAgreementDetailsPage = require("../page_objects/legal_agreement/check-legal-agreement-details.page.js");
const legalPartyListPage = require("../page_objects/legal_agreement/legal-party-list.page.js");
const tasklistPage = require("../page_objects/register-land-task-list.page");
const needAddAllLegalFilesPage = require("../page_objects/legal_agreement/planning_obligation/need-add-all-legal-files.page.js");
const NeedAddAllLegalFilesCCPage = require("../page_objects/legal_agreement/conservation_covenant/need-add-all-legal-files-cc.page.js")
const needAddAllResponsibleBodies = require("../page_objects/legal_agreement/conservation_covenant/need-add-all-responsible-bodies.page.js")
const addResponsibleBodyConservationCovenantPage = require("../page_objects/legal_agreement/conservation_covenant/add-responsible-body-cc.page.js")
const checkResponsibleBodiesPage = require("../page_objects/legal_agreement/conservation_covenant/check-responsible-bodies-cc.page.js")
const legalPartyAddTypePage = require("../page_objects/legal_agreement/legal-party-add-type.page.js");
const AddLandownerIndividualCCPage = require("../page_objects/legal_agreement/conservation_covenant/add-landowner-individual-conservation-covenant.page.js")
const addLandownerOrganisationCCPage = require("../page_objects/legal_agreement/conservation_covenant/add-landowner-organisation-conservation-covenant.page.js")
const needAddAllLandownersCCPage = require("../page_objects/legal_agreement/conservation_covenant/need-add-all-landowners-cc.page.js");
const NeedAddAllLandownersS106Page = require("../page_objects/legal_agreement/planning_obligation/need-add-all-landowners.page.js")
const landownerIndividualOrOrganisationCCPage = require("../page_objects/legal_agreement/conservation_covenant/landowner-cc-individual-organisation.page.js")
const LandownerIndividualOrganisationS106Page = require("../page_objects/legal_agreement/planning_obligation/landowner-individual-organisation.page.js")
const legalAgreementRemoveFilePage = require("../page_objects/legal_agreement/remove-legal-agreement-file.page.js")
const legalAgreementCheckLandownersPage = require("../page_objects/legal_agreement/check-landowners.page.js")
const habitatPlanLegalAgreementPage = require("../page_objects/management_plan/habitat-plan-legal-agreement.page.js");
const enhancementWorksStartDatePage = require('../page_objects/management_plan/enhancement-works-start-date.page.js');
const legalAgreementEndDatePage = require('../page_objects/legal_agreement/legal-agreement-end-date.page.js');



let  basePage = legalAgreementAddPartiesPage;

Given("I have completed the legal-agreement section", async () => {
  await completeLegalAgreementSection("legal party 1", "12/10/2022");
})

Given("I am Informed I have to add all {string} files", async (filetype)=> {
  //page object defaults to CC at the moment  
  //Todo check the title string 
  needAddAllLegalFilesPage.continueButton.click();
})

When("I add the legal party {string} with a role of {string}", async (fullname, role) =>{
    await addLegalParty(fullname, role);
    await legalAgreementAddPartiesPage.continueButton.click();
})

When("I choose to add another legal party of {string} with a role of {string}", async (fullname, role) =>{
  
  // select to add another legal party
  await basePage.radioYes.click();
  await legalPartyListPage.continueButton.click();
  
  //add another legal party
  await addLegalParty(fullname, role);

}) 

Then("I can should see the number of legal parties in the title as {string}", async (number) =>{
  await $("h1").waitForExist({ timeout: 5000 });

  // assert against the page title
  expect(await browser.getTitle()).toContain(number);
})

When("I confirm the legal party role as a {string}", async (role) => {
  await legalAgreementAddPartiesPage.addLegalPartyRole(role);
  await legalAgreementAddPartiesPage.continueButton.click();  
})

When("I add a legal party role as a {string}", async (role) => {
  await legalAgreementAddPartiesPage.addLegalPartyRole(role);
})

When("I add the legal party fullname or organisation as {string}", async (fullname) => {
  await addLegalPartyFullName(fullname); 
})

async function completeLegalAgreementSection(fullname, date) { 
  
  //**** Conservation Covenant default at the moment ****
  
  //And I confirm i have added all legal agreement files
  // multiple file addition page_object needs adding
  await basePage.radioYes.click();
  await basePage.continueButton.click();

  // And I am informed that I have to add all responsible bodies to the legal agreement
  await needAddAllResponsibleBodies.continueButton.click();

//  //And I choose that the landowner or leaseholder is an organisation
//  await legalPartyAddTypePage.radioOrganisation.click();
//  await legalPartyAddTypePage.continueButton.click();

  // And I add the responsible body listed on the conservation covenant
  await addResponsibleBody(fullname); 

  //And I choose that I have added all responsible bodies
  await checkResponsibleBodiesPage.radioYes.click();
  await checkResponsibleBodiesPage.continueButton.click();

  // And I am informed that I need to add all landowners or leaseholders listed on the conservation covenant
  await needAddAllLandownersCCPage.continueButton.click();

  //And I choose to confimr that the leasholder or lanowner listed on the concervation covenant is an organisation
  await landownerIndividualOrOrganisationCCPage.radioOrganisation.click();
  await landownerIndividualOrOrganisationCCPage.continueButton.click();

  // And I add the landholder or leaseholders organisation name
  // await addLegalParty(fullname); 
  await addOrganisationName(fullname); 

  await legalAgreementCheckLandownersPage.radioYes.click();
  await legalAgreementCheckLandownersPage.continueButton.click();


  //Is the habitat managenment plan included in the legal agreement
  // yes
  await habitatPlanLegalAgreementPage.radioYes.click();
  await habitatPlanLegalAgreementPage.continueButton.click();

  // have the habitat enhancement works started yet
  await enhancementWorksStartDatePage.radioNo.click();
  await enhancementWorksStartDatePage.continueButton.click();

  // does the legal agrement have an end date?
  await legalAgreementEndDatePage.radioNo.click();
  await legalAgreementEndDatePage.continueButton.click();


  // // And I enter a valid "legal agreement start" date of "<legal-agreement start date>"
  // await basePage.enterValidDate(date);
  
  // And I confirm the check "legal agreement" details are correct
  // confirm on the cya page
  await (checkLegalAgreementDetailsPage.acceptBtn).click();

  //tasklist section shows as complete
 await expect(tasklistPage.legalAgreementStatus).toHaveTextContaining("COMPLETED");    
  }
  
async function addResponsibleBody(fullname) {
    //Add a conservation covenant responsible body
  await addResponsibleBodyConservationCovenantPage.responsibleBodyName.addValue(fullname);

  //continue
  await addResponsibleBodyConservationCovenantPage.continueButton.click();
  
}

async function addOrganisationName(fullname) {
  
  //add the organisation name 
  await addLandownerOrganisationCCPage.organisationName.addValue(fullname);

  //continue
  await addLandownerOrganisationCCPage.continueButton.click();
  
}
