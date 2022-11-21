import { When, Then } from "@cucumber/cucumber";
import legalAgreementAddPartiesPage from "../page_objects/legal_agreement/add-legal-agreement-parties.page.js";

Then("I can choose to add another legal party", async () => {
  await legalAgreementAddPartiesPage.addAnotherLegalParty.click();
 
 //check 2nd party details exist
 await expect(legalAgreementAddPartiesPage.legalPartyFullName2).toExist();
 await expect(legalAgreementAddPartiesPage.legalPartyRole2).toExist();
})

When("I confirm the legal party role as a {string}", async (role) => {
  //Todo: currently no unique identifiers in code awaiting bug fixes in BNGP-1267
  await legalAgreementAddPartiesPage.legalPartyRole.waitForExist({ timeout: 5000 });
  await legalAgreementAddPartiesPage.legalPartyRole.click();
  await legalAgreementAddPartiesPage.continueButton.click();  
})

When("I add a legal party role as a {string}", async (role) => {
  await legalAgreementAddPartiesPage.legalPartyRole.waitForExist({ timeout: 5000 });
  await legalAgreementAddPartiesPage.legalPartyRole.click();
})

When("I add the legal party fullname or organisation as {string}", async (fullname) => {
  await legalAgreementAddPartiesPage.legalPartyFullName.addValue(fullname);
})