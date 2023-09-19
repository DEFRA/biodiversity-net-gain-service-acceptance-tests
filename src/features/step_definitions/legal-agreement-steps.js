import { Given, When, Then } from "@cucumber/cucumber";
import legalAgreementAddPartiesPage from "../page_objects/legal_agreement/add-legal-agreement-parties.page.js";
import checkLegalAgreementDetailsPage from "../page_objects/legal_agreement/check-legal-agreement-details.page.js";
import legalPartyListPage from "../page_objects/legal_agreement/legal-party-list.page.js";

let  basePage = legalAgreementAddPartiesPage;

Given("I have completed the legal-agreement section", async () => {
  await completeLegalAgreementSection("legal party 1", "Landowner", "12/10/2022");
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

async function completeLegalAgreementSection(fullname, role, date) { 
  // And I add the legal party fullname or organisation as "<legal party name>"
  await addLegalParty(fullname, role); 

  // Add another legal agreement party?
  // say no 
  await legalPartyListPage.radioNo.click();
  // and continue
  await legalPartyListPage.continueButton.click();

  // And I enter a valid "legal agreement start" date of "<legal-agreement start date>"
  await basePage.enterValidDate(date);
  
  // And I confirm the check "legal agreement" details are correct
  // confirm on the cya page
  await (checkLegalAgreementDetailsPage.acceptBtn).click();
    
  }

async function addLegalParty(fullname, role) {
  // And I add the legal party fullname or organisation as "<legal party name>"
  await addLegalPartyFullName(fullname); 

  // And I confirm the legal party role as a "<legal party role>"
  await legalAgreementAddPartiesPage.addLegalPartyRole(role);
  await legalAgreementAddPartiesPage.continueButton.click();
 
}

async function addLegalPartyFullName(fullname) {
  await legalAgreementAddPartiesPage.legalPartyFullName.addValue(fullname);
}
