const { Given, When, Then } = require("@wdio/cucumber-framework");
const startPage = require("../page_objects/start.page");
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
const legalAgreementUploadPage = require("../page_objects/legal_agreement/upload-legal-agreement.page");
const legalAgreementCheckFilePage = require("../page_objects/legal_agreement/check-legal-agreement-file.page");
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
const landOwnershipUploadPage = require("../page_objects/land_ownership/land-ownership-upload.page");
const landOwnershipCheckPage = require("../page_objects/land_ownership/land-ownership-check.page");
const landownershipRegisteredLandownerPage = require("../page_objects/land_ownership/registered-landowner.page");
const landownershipAddLandowners = require("../page_objects/land_ownership/add-landowners.page");
const gridReferencePage = require("../page_objects/land_boundary/grid-reference.page");
const addHectaresPage = require("../page_objects/land_boundary/add-hectares.page");
const habitatWorksStartDatePage = require("../page_objects/management_plan/habitat-works-start-date.page");
const monitoringStartDatePage = require("../page_objects/management_plan/monitoring-start-date.page");
const resultsPage = require("../page_objects/eligibility_questions/results.page");

const basePage = legalAgreementUploadPage;

const pages = {
  start: startPage,
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
  //legal agreement
  "legal-agreement-upload": legalAgreementUploadPage,
  "legal-agreement-check": legalAgreementCheckFilePage,
  "legal-agreement-type": legalAgreementTypePage,
  "need-legal-agreement": legalAgreementNeedpage,
  "add-legal-agreement-parties": legalAgreementAddPartiesPage,
  "legal-agreement-start-date": legalAgreementStartDatePage,
  "check-legal-agreement-details": legalAgreementCheckDetailsPage,
  //hmmp
  "management-plan-upload": managementPlanUploadPage,
  "management-plan-check": managementPlanCheckPage,
  "habitat-works-start-date": habitatWorksStartDatePage,
  "monitoring-start-date": monitoringStartDatePage,
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
  //land ownership
  "land-ownership-upload": landOwnershipUploadPage,
  "land-ownership-check": landOwnershipCheckPage,
  "registered-landowner": landownershipRegisteredLandownerPage,
  "add-landowners": landownershipAddLandowners,
  //task-list
  "register-land-task-list": taskListPage
};

Given(/^I navigate to the "(.*)" page$/, async (page) => {

  // open the page requested from the list of pages
  page = page.toLowerCase();
  await pages[page].open();

  await $("h1").waitForExist({ timeout: 5000 });

  // assert against the page title
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

When("I select {string} and continue", async (option) => {

  switch (option) {
    case "conservation covenant": {
      await legalAgreementTypePage.conservationCovenant.click();
      await basePage.continueButton.click();
      break;
    }
    case "planning obligation": {
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
  switch (role) {
    case "landowner": {
      await applicantDetailsRolePage.landOwner.click();
      await basePage.continueButton.click(); 
      break;
    }
    case "other": {
      await applicantDetailsRolePage.other.click(); 
      await basePage.continueButton.click(); 
      break;
    }
  }
   
})

When("I confirm the check {string} are correct", async (check) => {
  //confirm check your answer pages
  if(check == "your details"){
    await expect(applicantDetailsCheckYourDetailsPage.continueButton).toBeDisplayed();

    await expect(applicantDetailsCheckYourDetailsPage.fullnameValue).not.toBeNull();
    await expect(applicantDetailsCheckYourDetailsPage.roleValue).not.toBeNull();
    await expect(applicantDetailsCheckYourDetailsPage.emailValue).not.toBeNull();

    await (applicantDetailsCheckYourDetailsPage.continueButton).click();
  }  
})

When("I enter a valid start date of {string}", async (date) => {

  var arr = date.split('/');

  //clear values
  await basePage.Day.clearValue();
  await basePage.Month.clearValue();
  await basePage.Year.clearValue();

  //add values
  await basePage.Day.addValue(arr[0]);
  await basePage.Month.addValue(arr[1]);
  await basePage.Year.addValue(arr[2]);
  await (await basePage.continueButton).click();
 
});

When("I enter an invalid start date of {string}", async (date) => {
  var arr = date.split('/');

    //clear values
    await basePage.Day.clearValue();
    await basePage.Month.clearValue();
    await basePage.Year.clearValue();

    //add values
    await basePage.Day.addValue(arr[0]);
    await basePage.Month.addValue(arr[1]);
    await basePage.Year.addValue(arr[2]);
    await (await basePage.continueButton).click();

});

When("I choose to change the {string} answer", async (option) => {
  switch (option) {
    //applicant details
    case "fullname": {
      await applicantDetailsCheckYourDetailsPage.changeFullname.click();
      break;
    }
    case "role": {
      await applicantDetailsCheckYourDetailsPage.changeRole.click();
      break;
    }
    case "email": {
      await applicantDetailsCheckYourDetailsPage.changeEmail.click();
      break;
    }
    //legal agreement 
    case "parties involved": {
      await legalAgreementCheckDetailsPage.changeParties.click();
      break;
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
  case "email": {

    await applicantDetailsEmailPage.addEmailAddress(value);

    // confirm the address is correct on the correct email page
    await applicantDetailsCorrectEmailPage.radioYes.click();
    await  applicantDetailsCorrectEmailPage.continueButton.click();

    break;
  }
  }
})

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

Then("I can choose to remove the other {string}", async (option) => {

  if(option == "legal party") {

    await (legalAgreementAddPartiesPage.removeLegalParty2).click();

    //check 2nd party details do not exist
    await expect(legalAgreementAddPartiesPage.legalPartyName2).not.toExist();
    await expect(legalAgreementAddPartiesPage.legalPartyRole2).not.toExist();
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
        case "email": {
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
  }    
});

