const { Given, When, Then } = require("@wdio/cucumber-framework");
const startPage = require("../page_objects/start.page");
const manageBngPage = require("../page_objects/manage-biodiversity-gains.page");
const biodiversityGainSitesPage = require("../page_objects/biodiversity-gain-sites.page");
const checkYouCanRegisterPage = require("../page_objects/eligibility_questions/check-you-can-register.page");
const siteInEnglandPage = require("../page_objects/eligibility_questions/site-in-england.page");
const cannotContinuePage = require("../page_objects/eligibility_questions/cannot-continue.page");
const applicantDetailsNamePage = require("../page_objects/applicant_details/name.page");
const applicantDetailsRolePage = require("../page_objects/applicant_details/role.page");
const applicantDetailsEmailPage = require("../page_objects/applicant_details/email.page");
const applicantDetailsCorrectEmailPage = require("../page_objects/applicant_details/correct-email.page");
const applicantDetailsCheckYourDetailsPage = require("../page_objects/applicant_details/check-your-details.page");
const legalAgreementTypePage = require("../page_objects/legal_agreement/legal-agreement-type.page");
const legalAgreementNeedpage = require("../page_objects/legal_agreement/need-legal-agreement.page");
const needAddAllLegalFilesPage = require("../page_objects/legal_agreement/planning_obligation/need-add-all-legal-files.page.js");
const needAddAllLegalFilesCCPage = require("../page_objects/legal_agreement/conservation_covenant/need-add-all-legal-files-cc.page.js")
const legalAgreementUploadPage = require("../page_objects/legal_agreement/conservation_covenant/upload-legal-agreement-cc.page");
const legalAgreementCCUploadPage = require("../page_objects/legal_agreement/conservation_covenant/upload-legal-agreement-cc.page");
const legalAgreementCheckFilePage = require("../page_objects/legal_agreement/check-legal-agreement-file.page");
const legalAgreementCheckFileCCPage = require("../page_objects/legal_agreement/conservation_covenant/check-legal-agreement-file-cc.page");
const legalPartyListPage = require("../page_objects/legal_agreement/legal-party-list.page");
const legalAgreementAddPartiesPage = require("../page_objects/legal_agreement/add-legal-agreement-parties.page");
const legalAgreementStartDatePage = require("../page_objects/legal_agreement/legal-agreement-start-date.page");
const legalAgreementCheckDetailsPage = require("../page_objects/legal_agreement/check-legal-agreement-details.page");
const managementPlanUploadPage = require("../page_objects/management_plan/management-plan-upload.page");
const managementPlanCheckPage = require("../page_objects/management_plan/management-plan-check.page");
const taskListPage = require("../page_objects/register-land-task-list.page");
const landBoundaryChooseUploadOptionPage = require("../page_objects/land_boundary/choose-land-boundary-upload.page");
const landBoundaryUploadImageFilePage = require("../page_objects/land_boundary/upload-land-boundary.page");
const landBoundaryUploadGeospatialFilePage = require("../page_objects/land_boundary/upload-geospatial-file.page");
const landBoundaryCheckImageFilePage = require("../page_objects/land_boundary/check-land-boundary-file.page");
const landBoundaryCheckGeospatialFilePage = require("../page_objects/land_boundary/check-geospatial-file.page")
const landBoundaryCheckImageDetailsPage = require("../page_objects/land_boundary/check-land-boundary-details.page");
const metricUploadPage = require("../page_objects/metric/metric-upload.page");
const metricCheckPage = require("../page_objects/metric/metric-check.page");
const metricDisplayBaselinePage = require("../page_objects/metric/check-habitat-baseline.page");
const metricDisplayHabitatCreationPage = require("../page_objects/metric/check-habitat-created.page");
const metricCheckDetailsPage = require("../page_objects/metric/check-metric-details.page"); 
const landOwnershipUploadPage = require("../page_objects/land_ownership/land-ownership-upload.page");
const landOwnershipCheckPage = require("../page_objects/land_ownership/land-ownership-check.page");
const landownershipRegisteredLandownerPage = require("../page_objects/land_ownership/registered-landowner.page");
const landownershipAddLandowners = require("../page_objects/land_ownership/add-landowners.page");
const gridReferencePage = require("../page_objects/land_boundary/grid-reference.page");
const addHectaresPage = require("../page_objects/land_boundary/add-hectares.page");
const monitoringStartDatePage = require("../page_objects/management_plan/monitoring-start-date.page");
const resultsPage = require("../page_objects/eligibility_questions/results.page");
const managementMonitoringCheckDetailsPage = require("../page_objects/management_plan/check-management-monitoring-details.page");
const landOwnershipCheckDetailsPage = require("../page_objects/land_ownership/check-ownership-details.page");
const checkAndSubmitPage = require("../page_objects/check-and-submit.page");
const confirmationPage = require("../page_objects/application-submitted.page");
const LocalLandChargeUploadPage = require("../page_objects/local_land_charge/upload-local-land-charge.page");
const LocalLandChargeCheckPage = require("../page_objects/local_land_charge/check-local-land-charge.page");
const LocalLandChargeNeedPage = require("../page_objects/local_land_charge/need-local-land-charge.page");
const legalPartyRemovePage = require("../page_objects/legal_agreement/legal-party-remove.page");

const basePage = legalAgreementUploadPage;

//**Developer Journey pages */
const developerStartPage = require("../page_objects/developer/routing-register.page");
const DeveloperTaskListPage = require("../page_objects/developer/tasklist.page");
const DeveloperMetricUploadPage = require("../page_objects/developer/upload-metric-file.page");
const DeveloperConsentAgreementUploadPage = require("../page_objects/developer/consent-agreement-upload.page");  
const DeveloperConfirmDevelopmentDetailsPage = require("../page_objects/developer/metric-confirm-development-details.page"); 
const DeveloperCheckAnswersPage = require("../page_objects/developer/check-answers.page");
const  DeveloperDetailsName = require("../page_objects/developer/details-name.page");

const pages = {
  start: startPage,
//Dashboard
  "manage-biodiversity-gains" : manageBngPage,
  "biodiversity-gain-sites" : biodiversityGainSitesPage,
  //eligibility questions
  "check-you-can-register": checkYouCanRegisterPage,
  "site-in-england": siteInEnglandPage,
  "cannot-continue": cannotContinuePage,
  "results": resultsPage,
  //applicant details
  "applicant-name": applicantDetailsNamePage,
  "role": applicantDetailsRolePage,
  "email": applicantDetailsEmailPage,
  "correct-email": applicantDetailsCorrectEmailPage,
  "check-your-details": applicantDetailsCheckYourDetailsPage,
  //land ownership
  "land-ownership-upload": landOwnershipUploadPage,
  "land-ownership-check": landOwnershipCheckPage,
  "registered-landowner": landownershipRegisteredLandownerPage,
  "add-landowners": landownershipAddLandowners,
  //Land boundary 
  "choose-land-boundary-upload": landBoundaryChooseUploadOptionPage,
  "land-boundary-upload": landBoundaryUploadImageFilePage,
  "geospatial-upload": landBoundaryUploadGeospatialFilePage,
  "check-geospatial-file": landBoundaryCheckGeospatialFilePage,
  "land-boundary-check": landBoundaryCheckImageFilePage,
  "geospatial-check": landBoundaryCheckGeospatialFilePage,
  "check-land-boundary-details": landBoundaryCheckImageDetailsPage,
  "grid-reference": gridReferencePage,
  "add-hectares": addHectaresPage,
  //metric
  "metric-upload": metricUploadPage,
  "metric-check": metricCheckPage,
  "check-habitat-baseline": metricDisplayBaselinePage,
  "check-habitat-created": metricDisplayHabitatCreationPage,
  "check-metric-details": metricCheckDetailsPage,
  //hmmp
  "management-plan-upload": managementPlanUploadPage,
  "management-plan-check": managementPlanCheckPage,
  "monitoring-start-date": monitoringStartDatePage,
  "check-management-monitoring-details": managementMonitoringCheckDetailsPage,
  //legal agreement
  "legal-agreement-upload": legalAgreementUploadPage,
  "legal-agreement-cc-upload": legalAgreementCCUploadPage,
  "legal-agreement-check": legalAgreementCheckFileCCPage,
  "legal-agreement-type": legalAgreementTypePage,
  "need-legal-agreement": legalAgreementNeedpage,
  "add-legal-agreement-parties": legalAgreementAddPartiesPage,
  "legal-party-list": legalPartyListPage,
  "legal-agreement-start-date": legalAgreementStartDatePage,
  "check-legal-agreement-details": legalAgreementCheckDetailsPage,
  "check-legal-agreement-cc-details": legalAgreementCheckFileCCPage,
  //Local land Charge search certificate
  "local-land-charge-upload": LocalLandChargeUploadPage,
  "local-land-charge-check": LocalLandChargeCheckPage,
  "need-local-land-charge": LocalLandChargeNeedPage,
  // task-list
  "register-land-task-list": taskListPage,
  //// tasklist sections
  "land-ownership" : landOwnershipUploadPage,
  "land-boundary" : landBoundaryUploadImageFilePage,
  "metric": metricUploadPage,
  "management-plan": managementPlanUploadPage,
  "legal-agreement": legalAgreementTypePage,
  "local-land-charge": LocalLandChargeUploadPage,
  //summary
  "check-and-submit": checkAndSubmitPage,
  //Confirmation
  "application-submitted": confirmationPage,
  

  //**DEVELOPER JOURNEY */
  //Start
  "routing-register": developerStartPage,
  "developer/tasklist": DeveloperTaskListPage,
  "developer-metric-upload": DeveloperMetricUploadPage,
  "consent-agreement-upload":  DeveloperConsentAgreementUploadPage,
  "confirm-development-details": DeveloperConfirmDevelopmentDetailsPage,
  "check-answers" : DeveloperCheckAnswersPage,
  "developer-details-name": DeveloperDetailsName, 
};

Given(/^I navigate to the "(.*)" page$/, async (page) => {
  // open the page requested from the list of pages
  page = page.toLowerCase();

  // if a legal agreement upload page choose the type of agreement first before opening the page
  if(page == "legal-agreement-upload"){
    await pages["legal-agreement-type"].open()
    await legalAgreementTypePage.conservationCovenant.click();
    await legalAgreementTypePage.continueButton.click();
    await needAddAllLegalFilesPage.continueButton.click();
  }
  else{
    await pages[page].open();
  }
  
  // assert against the page title
  await $("h1").waitForExist({ timeout: 5000 });
  expect(await browser.getTitle()).toContain(pages[page].titleText);
});

Then(/^I (?:am|should be) (?:on|returned to) the "(.*)" page$/, async (page) => {
  await $("h1").waitForExist({ timeout: 5000 });

  // assert against the page title
  expect(await browser.getTitle()).toContain(pages[page].titleText);
});

When("I continue without an action", async () => {
  // click continue
  await basePage.continueButton.click();
});


When("I go back to the previous page", async () => {
  // service back button
  await basePage.backButton.click();
}) 

When("I select {string} and continue", async (option) => {

  switch (option) {
    case "Conservation covenant": {
      await legalAgreementTypePage.conservationCovenant.click();
      await basePage.continueButton.click();
      break;
    }
    case "Planning obligation": {
      await legalAgreementTypePage.planningObligation.click();
      await basePage.continueButton.click();
      break;
    }
    case "I do not have a legal agreement": {
      await legalAgreementTypePage.doNotHaveDocument.click();
      await basePage.continueButton.click();
      break;
    }
    case "Other role": {
      (await legalAgreementAddPartiesPage.otherLegalPartyRoleOption).click();
      await basePage.continueButton.click();
      break;
    }
  }
});

When("I confirm my role as a {string}", async (role) => {
  await applicantDetailsRolePage.confirmRole(role);  
})

When("I confirm the {string} information is correct", async (check) => {
  //confirm check your answer pages
  switch (check) {
    //applicant details
    case "applicant":{
        await confirmApplicantDetails();
      break;
    }
    case "land boundary":{
        await confirmLandBoundaryDetails();
      break;
    }
    case "land ownership":{
        await confirmLandOwnershipDetails();
      break;
    }
    case "check-habitat-baseline":{
      await confirmMetricBaselineDetails();
    break;
    }
    case "check-habitat-creation":{
      await confirmMetricHabitatCreationDetails();
    break;
    }
    case "check-metric-details":{
      await checkMetricDetails();
    break;
    }
    case "management plan":{
        await confirmManagementPlanDetails();
      break;
    }
    case "legal agreement":{
        await confirmLegalAgreementDetails();
      break;
    }
    default:{
      throw new Error("Section "+ check +" doesn't exist");
    }
  }  
})

async function confirmLegalAgreementDetails() {
  await expect(legalAgreementCheckDetailsPage.acceptBtn).toBeDisplayed();
  await (legalAgreementCheckDetailsPage.acceptBtn).click();
}

async function confirmLandOwnershipDetails() {
  await expect(landOwnershipCheckDetailsPage.continueButton).toBeDisplayed();
  await (landOwnershipCheckDetailsPage.continueButton).click();
}

async function checkMetricDetails() {
  await expect(metricCheckDetailsPage.continueButton).toBeDisplayed();
  await (metricCheckDetailsPage.continueButton).click();
}

async function confirmMetricBaselineDetails() {
  await expect(metricDisplayBaselinePage.continueButton).toBeDisplayed();
  await (metricDisplayBaselinePage.continueButton).click();
}

async function confirmMetricHabitatCreationDetails() {
  await expect(metricDisplayHabitatCreationPage.continueButton).toBeDisplayed();
  await (metricDisplayHabitatCreationPage.continueButton).click();
}

async function confirmManagementPlanDetails() {
  await expect(managementMonitoringCheckDetailsPage.continueButton).toBeDisplayed();
  await (managementMonitoringCheckDetailsPage.continueButton).click();
}

async function confirmLandBoundaryDetails() {
  await expect(landBoundaryCheckImageDetailsPage.continueButton).toBeDisplayed();
  await (landBoundaryCheckImageDetailsPage.continueButton).click();
}

async function confirmApplicantDetails() {
  await expect(applicantDetailsCheckYourDetailsPage.continueButton).toBeDisplayed();
  await expect(applicantDetailsCheckYourDetailsPage.fullnameValue).not.toBeNull();
  await expect(applicantDetailsCheckYourDetailsPage.roleValue).not.toBeNull();
  await expect(applicantDetailsCheckYourDetailsPage.emailValue).not.toBeNull();
  await (applicantDetailsCheckYourDetailsPage.continueButton).click();
}

When("I enter a start date of {string}", async (date) => {
  //Todo check are actual invalid dates being sent....
  await basePage.enterValidDate(date);

});

When("I choose to change the {string} answer on the {string} page", async (option, page) => {
  switch (option) {
    case "fullname": {
      //switch to change the fullname for the applicant details cya page or the summary page (cya's)
      switch (page) {
        case "check-your-details":{
          await applicantDetailsCheckYourDetailsPage.changeFullname.click();
          break;
        }
        case "check-and-submit":{
          await checkAndSubmitPage.changeFullname.click();
          break;
        }
        default:{
          throw new Error(`Page ${page} doesn't exist`);
        } 
    }
      break;
    }
    case "role": {
      await applicantDetailsCheckYourDetailsPage.changeRole.click();
      break;
    }
    case "email address": {
      await applicantDetailsCheckYourDetailsPage.changeEmail.click();
      break;
    }
    //legal agreement 
    case "parties involved": {
      await legalAgreementCheckDetailsPage.changeParties.click();
      break;
    }
    default:{
      throw new Error("Section " + option + " doesn't exist");
    }
  }
});

When("I update the {string} to {string}", async (option, value) => {
    switch (option) {
      //applicant details
      case "fullname": {
        // clear the original value
        await (applicantDetailsNamePage.fullName).clearValue();
        
        // add the fullname
        await applicantDetailsNamePage.fullName.addValue(value);
      
        await (basePage.continueButton).click();
        break;
      }
      case "role": {
        await applicantDetailsCheckYourDetailsPage.changeRole.click();
        await (basePage.continueButton).click();
        break;
      }
      case "email address": {

        await applicantDetailsEmailPage.addEmailAddress(value);

        // confirm the address is correct on the correct email page
        await applicantDetailsCorrectEmailPage.radioYes.click();
        await  applicantDetailsCorrectEmailPage.continueButton.click();

        break;
      }
      default: {
        throw new Error("Page " + option + " doesn't exist");
      }
    }
  }
)

When("I add another {string} as {string} and confirm", async (option, value) => {
  if(option == "legal party") {
    await legalAgreementAddPartiesPage.addAnotherLegalParty.click();
    await (legalAgreementAddPartiesPage.legalPartyFullName2).addValue(value);
    //Todo: role currently defaults to landowner
    await legalAgreementAddPartiesPage.legalPartyRole2.click();
    await (basePage.continueButton).click();
  }
})

Then("I should see the error {string}", async (message) => {
    // check errorMsg text
    await expect(basePage.errorMsg).toHaveTextContaining(message);
});

Then("I should see the error and the error summary displayed", async () => {
  // check on error an errorMsg and error summary is displayed following Gov Design system guidelines
  // https://design-system.service.gov.uk/components/error-summary/
  await expect(basePage.errorMsg).toBeDisplayed();
  await expect(basePage.errorMsgSummary).toBeDisplayed();
});

Then("I should not see an error message displayed", async () => {
  await expect(basePage.errorMsg).not.toBeDisplayed();
  await expect(basePage.errorMsgSummary).not.toBeDisplayed();
  
});

Then("the other role value should not be {string}", async (input) => {
  await expect(basePage.otherRoleTextBox).not.toHaveValue(input);
});

Then("I can remove the other {string}", async (option) => {

  if(option == "legal party") {
    // choose to remove the 2nd legal party in the list
    await (legalPartyListPage.removeLegalParty1).click();
    // confirm removal
    await (legalPartyRemovePage.radioYes).click();
    await (legalPartyRemovePage.continueButton).click();
    // assert to check remove link for 2nd legal party doesn't exist anymore
    await expect(legalPartyListPage.removeLegalParty1).not.toExist();

  }
})

Then(/^I should see the "(.*)" (?:shown as|updated to) "(.*)" on the "(.*)" page$/, async (option, value, page) => {
 
  switch(page){
    case "check-your-details": {
      //Todo: check your details statement could add a function to aid readability
      switch (option) {
        case "fullname": {
          await expect(applicantDetailsCheckYourDetailsPage.fullnameValue).toHaveTextContaining(value);
          break;
        }
        case "role": {
          await expect(applicantDetailsCheckYourDetailsPage.roleValue).toHaveTextContaining(value, {ignoreCase:true, asString:true});
          break;
        }
        case "email address": {
          await expect (applicantDetailsCheckYourDetailsPage.emailValue).toHaveTextContaining(value);
          break;
        }
      }
      break;
    }
    case "check-legal-agreement-details": {    
      switch (option) {
        case "parties involved": {
          await expect(legalAgreementCheckDetailsPage.legalPartiesValue).toHaveTextContaining(value);
          break;
        }
      }
      break;
    }  
    case "check-and-submit": {    
      switch (option) {
        case "fullname": {
          await expect(checkAndSubmitPage.fullnameValue).toHaveTextContaining(value);
          break;
        }
      }
      break;
    }
    default:{
      throw new Error("Page " + page + " doesn't exist");
    }
  }    
});

