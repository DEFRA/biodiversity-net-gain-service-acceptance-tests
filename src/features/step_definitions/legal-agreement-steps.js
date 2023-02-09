import { Given, When, Then } from "@cucumber/cucumber";
import legalAgreementAddPartiesPage from "../page_objects/legal_agreement/add-legal-agreement-parties.page.js";
import checkLegalAgreementDetailsPage from "../page_objects/legal_agreement/check-legal-agreement-details.page.js";
let  basePage = legalAgreementAddPartiesPage;

Given("I have completed the legal-agreement section", async () => {
  await completeLegalAgreementSection("legal party 1", "Landowner", "12/10/2022");
})

Then("I can choose to add another legal party", async () => {
  await legalAgreementAddPartiesPage.addAnotherLegalParty.click();
 
 //check 2nd party details exist
 await expect(legalAgreementAddPartiesPage.legalPartyFullName2).toExist();
 await expect(legalAgreementAddPartiesPage.legalPartyRole2).toExist();
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
  await addLegalPartyFullName(fullname); 
  
  // And I confirm the legal party role as a "<legal party role>"
  await legalAgreementAddPartiesPage.addLegalPartyRole(role);
  await legalAgreementAddPartiesPage.continueButton.click();

  // And I enter a valid "legal agreement start" date of "<legal-agreement start date>"
  await basePage.enterValidDate(date);
  
  // And I confirm the check "legal agreement" details are correct
  // confirm on the cya page
  await (checkLegalAgreementDetailsPage.acceptBtn).click();
    
  }

async function addLegalPartyFullName(fullname) {
  await legalAgreementAddPartiesPage.legalPartyFullName.addValue(fullname);
}