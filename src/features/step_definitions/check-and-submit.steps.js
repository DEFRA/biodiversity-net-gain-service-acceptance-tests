const { When, Then } = require("@wdio/cucumber-framework");
const basePage = require("../page_objects/check-and-submit.page");
const CheckAndSubmitPage = require("../page_objects/check-and-submit.page");

When("I submit my application", async () => {
  await basePage.govContinueButton.click();
});

Then("I should see the {string} on the summary shown as {string}", async (section, value)  => {
    
  switch (section) {
      // case "fullname": {
      //   await expect(CheckAndSubmitPage.fullnameValue).toHaveTextContaining(value);
      //   break;
      // } 
      // case "role": {
      //     await expect(CheckAndSubmitPage.roleValue).toHaveTextContaining(value);
      //   break;
      // }
      // case "email address": {
      //   await expect(CheckAndSubmitPage.emailAddressValue).toHaveTextContaining(value);
      // break;
      // }
      //Todo: land boundary file Type
      case "Land boundary file uploaded": {
        await expect(CheckAndSubmitPage.landBoundaryFilenameValue).toHaveTextContaining(value);
      break;
      }
      case "grid reference": {
        await expect(CheckAndSubmitPage.gridReferenceValue).toHaveTextContaining(value);
      break;
      }
      case "hectares": {
        await expect(CheckAndSubmitPage.hectaresValue).toHaveTextContaining(value);
      break;
      }
      case "Proof of land ownership file uploaded": {
        await expect(CheckAndSubmitPage.landOwnershipFileNameValue).toHaveTextContaining(value);
      break;
      }
      case "Landowner name": {
        await expect(CheckAndSubmitPage.landOwnerNameValue).toHaveTextContaining(value);
      break;
      }
      // case "Landowner consent": {
      //   await expect(CheckAndSubmitPage.landOwnerNameConsentValue).toHaveTextContaining(value);
      // break;
      // }
      case "Biodiversity Metric file uploaded": {
        await expect(CheckAndSubmitPage.metricFileNameValue).toHaveTextContaining(value);
      break;
      }
      case "Habitat management and monitoring plan uploaded": {
        await expect(CheckAndSubmitPage.hmmpFileNameValue).toHaveTextContaining(value);
      break;
      }
      case "Start date of the 30 year management and monitoring period": {
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