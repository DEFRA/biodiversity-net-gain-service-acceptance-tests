const { Given, When, Then } = require("@wdio/cucumber-framework");
const BasePage = require("../page_objects/check-and-submit.page");
const CheckAndSubmitPage = require("../page_objects/check-and-submit.page");

const basePage = new BasePage();
const checkAndSubmitPage = new CheckAndSubmitPage();

Given("I have agreed to the terms and conditions", async () => {
  
  // assert against the page title 
  await $("h1").waitForExist();
  expect(await browser.getTitle()).toContain(checkAndSubmitPage.titleText);
  await checkAndSubmitPage.confirmTermsAndConditionsChkBox.click();

})

When("I submit my application", async () => {
  await basePage.govContinueButton.click();
});

Then("I should see the {string} on the summary shown as {string}", async (section, value)  => {
    
  switch (section) {
      // case "fullname": {
      //   await expect(checkAndSubmitPage.fullnameValue).toHaveText(value);
      //   break;
      // } 
      // case "role": {
      //     await expect(checkAndSubmitPage.roleValue).toHaveText(value);
      //   break;
      // }
      // case "email address": {
      //   await expect(checkAndSubmitPage.emailAddressValue).toHaveText(value);
      // break;
      // }
      //Todo: land boundary file Type
      case "Land boundary file uploaded": {
        await expect(checkAndSubmitPage.landBoundaryFilenameValue).toHaveText(value);
      break;
      }
      case "grid reference": {
        await expect(checkAndSubmitPage.gridReferenceValue).toHaveText(value);
      break;
      }
      case "hectares": {
        await expect(checkAndSubmitPage.hectaresValue).toHaveText(value);
      break;
      }
      case "Proof of land ownership file uploaded": {
        await expect(checkAndSubmitPage.landOwnershipFileNameValue).toHaveText(value);
      break;
      }
      case "Landowner name": {
        await expect(checkAndSubmitPage.landOwnerNameValue).toHaveText(value);
      break;
      }
      // case "Landowner consent": {
      //   await expect(checkAndSubmitPage.landOwnerNameConsentValue).toHaveText(value);
      // break;
      // }
      case "Biodiversity Metric file uploaded": {
        await expect(checkAndSubmitPage.metricFileNameValue).toHaveText(value);
      break;
      }
      case "Habitat baseline information is correct": {
        await expect(checkAndSubmitPage.metricHabitatBaselineValue).toHaveText(value);
      break;
      }
      case "Habitat creation and enhancement information is correct": {
        await expect(checkAndSubmitPage.metricHabitatCreationEnhancementValue).toHaveText(value);
      break;
      }
      case "Habitat management and monitoring plan uploaded": {
        await expect(checkAndSubmitPage.hmmpFileNameValue).toHaveText(value);
      break;
      }
      case "Start date of the 30 year management and monitoring period": {
        await expect(checkAndSubmitPage.hmmp30YearStartDateValue).toHaveText(value);
      break;
      }
      case "legal-agreement type": {
        await expect(checkAndSubmitPage.legalAgreementTypeValue).toHaveText(value);
      break;
      }
      //Todo: legal-agreement filename
      case "legal party name": {
        await expect(checkAndSubmitPage.legalPartyNameValue).toHaveText(value);
      break;
      }
      case "legal party role": {
        await expect(checkAndSubmitPage.legalPartyRoleValue).toHaveText(value);
      break;
      }
      case "legal-agreement start date": {
        await expect(checkAndSubmitPage.legalAgreementStartDateValue).toHaveText(value);
      break;
      }
      default:{
        throw new Error("Section "+ section +" doesn't exist");
      }
    }
  });