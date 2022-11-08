import { When, Then } from "@cucumber/cucumber";
import legalAgreementAddPartiesPage from "../page_objects/legal_agreement/add-legal-agreement-parties.page.js";

Then("I can choose to add another legal party", async () => {
  await legalAgreementAddPartiesPage.addAnotherLegalParty.click();
 
 //check 2nd party details exist
 await expect(legalAgreementAddPartiesPage.legalPartyName2).toExist();
 await expect(legalAgreementAddPartiesPage.legalPartyRole2).toExist();
})


When("I add another {string}", async (option) => {

  await legalAgreementAddPartiesPage.addAnotherLegalParty.click();
  //Todo: add details for 2nd party
  
})

Then("I can choose to remove the other {string}", async (option) => {

    await (await legalAgreementAddPartiesPage.removeLegalParty2).click();

    //check 2nd party details do not exist
    await expect(legalAgreementAddPartiesPage.legalPartyName2).not.toExist();
    await expect(legalAgreementAddPartiesPage.legalPartyRole2).not.toExist();
  })