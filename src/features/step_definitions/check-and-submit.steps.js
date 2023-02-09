const { When, Then } = require("@wdio/cucumber-framework");
const basePage = require("../page_objects/check-and-submit.page");
const CheckAndSubmitPage = require("../page_objects/check-and-submit.page");

When("I submit my application", async () => {
  await basePage.govContinueButton.click();
});

Then("I should see the {string} on the summary shown as {string}", async (section, value)  => {
    
  switch (section) {
      case "fullname": {
        await expect(CheckAndSubmitPage.fullnameValue).toHaveTextContaining(value);
        break;
      } 
      case "role": {
          await expect(CheckAndSubmitPage.roleValue).toHaveTextContaining(value);
        break;
      }
      case "email address": {
        await expect(CheckAndSubmitPage.emailAddressValue).toHaveTextContaining(value);
      break;
      }
      //Todo: land boundary file Type
      //Todo: land boundary filename
      case "grid reference": {
        await expect(CheckAndSubmitPage.gridReferenceValue).toHaveTextContaining(value);
      break;
      }
      case "hectares": {
        await expect(CheckAndSubmitPage.hectaresValue).toHaveTextContaining(value);
      break;
      }
      //Todo: land ownership filename
      //Todo: landowner name?
      //Todo: metric filename
      //Todo: hmmp filename
      case "hmmp start date": {
        await expect(CheckAndSubmitPage.hmmpStartDateValue).toHaveTextContaining(value);
      break;
      }
      case "30 year monitor date": {
        await expect(CheckAndSubmitPage.hmmp30YearStartDateValue).toHaveTextContaining(value);
      break;
      }
      case "legal-agreement type": {
        await expect(CheckAndSubmitPage.legalAgreementTypeValue).toHaveTextContaining(value);
      break;
      }
      //Todo: legal-agreement filename
      case "legal party name": {
        await expect(CheckAndSubmitPage.legalPartyNameValue).toHaveTextContaining(value);
      break;
      }
      case "legal party role": {
        await expect(CheckAndSubmitPage.legalPartyRoleValue).toHaveTextContaining(value);
      break;
      }
      case "legal-agreement start date": {
        await expect(CheckAndSubmitPage.legalAgreementStartDateValue).toHaveTextContaining(value);
      break;
      }
      default:{
        throw new Error("Section "+ section +" doesn't exist");
      }
    }
  });