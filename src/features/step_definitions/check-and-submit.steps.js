const { Then } = require("@wdio/cucumber-framework");
const Summary = require("../page_objects/check-and-submit.page");

Then("I should see the {string} on the summary shown as {string}", async (section, value)  => {
    
  switch (section) {
      case "fullname": {
        await expect(Summary.fullnameValue).toHaveTextContaining(value);
        break;
      } 
      case "role": {
          await expect(Summary.roleValue).toHaveTextContaining(value);
        break;
      }
      case "email address": {
        await expect(Summary.emailAddressValue).toHaveTextContaining(value);
      break;
      }
      //Todo: land boundary file Type
      //Todo: land boundary filename
      case "grid reference": {
        await expect(Summary.gridReferenceValue).toHaveTextContaining(value);
      break;
      }
      case "hectares": {
        await expect(Summary.hectaresValue).toHaveTextContaining(value);
      break;
      }
      //Todo: land ownership filename
      //Todo: landowner name?
      //Todo: metric filename
      //Todo: hmmp filename
      case "hmmp start date": {
        await expect(Summary.hmmpStartDateValue).toHaveTextContaining(value);
      break;
      }
      case "30 year monitor date": {
        await expect(Summary.hmmp30YearStartDateValue).toHaveTextContaining(value);
      break;
      }
      case "legal-agreement type": {
        await expect(Summary.legalAgreementTypeValue).toHaveTextContaining(value);
      break;
      }
      //Todo: legal-agreement filename
      case "legal party name": {
        await expect(Summary.legalPartyNameValue).toHaveTextContaining(value);
      break;
      }
      case "legal party role": {
        await expect(Summary.legalPartyRoleValue).toHaveTextContaining(value);
      break;
      }
      case "legal-agreement start date": {
        await expect(Summary.legalAgreementStartDateValue).toHaveTextContaining(value);
      break;
      }
      default:{
        throw new Error("Section "+ section +" doesn't exist");
      }
    }
  });