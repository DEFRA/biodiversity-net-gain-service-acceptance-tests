const { Given, When, Then } = require("@wdio/cucumber-framework");
const basePage = require("../page_objects/check-and-submit.page");
const CheckAndSubmitPage = require("../page_objects/check-and-submit.page");

Given("I have agreed to the terms and conditions", async () => {
  
  // assert against the page title 
  await $("h1").waitForExist();
  expect(await browser.getTitle()).toContain(CheckAndSubmitPage.titleText);
  await CheckAndSubmitPage.confirmTermsAndConditionsChkBox.click();

})

When("I submit my application", async () => {
  await basePage.govContinueButton.click();
});

Then("I should see the {string} on the summary shown as {string}", async (section, value)  => {
    
  switch (section) {
      // case "fullname": {
      //   await expect(CheckAndSubmitPage.fullnameValue).toHaveText(value);
      //   break;
      // } 
      // case "role": {
      //     await expect(CheckAndSubmitPage.roleValue).toHaveText(value);
      //   break;
      // }
      // case "email address": {
      //   await expect(CheckAndSubmitPage.emailAddressValue).toHaveText(value);
      // break;
      // }
      //Todo: land boundary file Type
      case "Land boundary file uploaded": {
        await expect(CheckAndSubmitPage.landBoundaryFilenameValue).toHaveText(value);
      break;
      }
      case "grid reference": {
        await expect(CheckAndSubmitPage.gridReferenceValue).toHaveText(value);
      break;
      }
      case "hectares": {
        await expect(CheckAndSubmitPage.hectaresValue).toHaveText(value);
      break;
      }
      case "Proof of land ownership file uploaded": {
        await expect(CheckAndSubmitPage.landOwnershipFileNameValue).toHaveText(value);
      break;
      }
      case "Landowner name": {
        await expect(CheckAndSubmitPage.landOwnerNameValue).toHaveText(value);
      break;
      }
      // case "Landowner consent": {
      //   await expect(CheckAndSubmitPage.landOwnerNameConsentValue).toHaveText(value);
      // break;
      // }
      case "Biodiversity Metric file uploaded": {
        await expect(CheckAndSubmitPage.metricFileNameValue).toHaveText(value);
      break;
      }
      case "Habitat baseline information is correct": {
        await expect(CheckAndSubmitPage.metricHabitatBaselineValue).toHaveText(value);
      break;
      }
      case "Habitat creation and enhancement information is correct": {
        await expect(CheckAndSubmitPage.metricHabitatCreationEnhancementValue).toHaveText(value);
      break;
      }
      case "Habitat management and monitoring plan uploaded": {
        await expect(CheckAndSubmitPage.hmmpFileNameValue).toHaveText(value);
      break;
      }
      case "Start date of the 30 year management and monitoring period": {
        await expect(CheckAndSubmitPage.hmmp30YearStartDateValue).toHaveText(value);
      break;
      }
      case "legal-agreement type": {
        await expect(CheckAndSubmitPage.legalAgreementTypeValue).toHaveText(value);
      break;
      }
      //Todo: legal-agreement filename
      case "legal party name": {
        await expect(CheckAndSubmitPage.legalPartyNameValue).toHaveText(value);
      break;
      }
      case "legal party role": {
        await expect(CheckAndSubmitPage.legalPartyRoleValue).toHaveText(value);
      break;
      }
      case "legal-agreement start date": {
        await expect(CheckAndSubmitPage.legalAgreementStartDateValue).toHaveText(value);
      break;
      }
      default:{
        throw new Error("Section "+ section +" doesn't exist");
      }
    }
  });