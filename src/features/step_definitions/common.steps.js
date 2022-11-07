const { Given, When, Then } = require("@wdio/cucumber-framework");
const startPage = require("../page_objects/start.page");
const legalAgreementTypePage = require("../page_objects/legal_agreement/legal-agreement-type.page");
const legalAgreementNeedpage = require("../page_objects/legal_agreement/need-legal-agreement.page");
const legalAgreementUploadPage = require("../page_objects/legal_agreement/upload-legal-agreement.page");
const legalAgreementCheckFilePage = require("../page_objects/legal_agreement/check-legal-agreement-file.page");
const legalAgreementAddPartiesPage = require("../page_objects/legal_agreement/add-legal-agreement-parties.page.js");
const legalAgreementStartDatePage = require("../page_objects/legal_agreement/legal-agreement-start-date.page");
const legalAgreementCheckDetailsPage = require("../page_objects/legal_agreement/check-legal-agreement-details.page");
const managementPlanUploadPage = require("../page_objects/management_plan/management-plan-upload.page");
const managementPlanCheckPage = require("../page_objects/management_plan/management-plan-check.page");
const taskListPage = require("../page_objects/register-land-task-list.page");
const landBoundaryChooseUploadOptionPage = require("../page_objects/land_boundary/choose-upload-option.page");
const landBoundaryUploadGeospatialPage = require("../page_objects/land_boundary/upload-geospatial.page");
const landBoundaryUploadImageFilePage = require("../page_objects/land_boundary/upload-land-boundary.page");
const landBoundaryCheckImageFilePage = require("../page_objects/land_boundary/check-land-boundary-file.page");
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

const basePage = legalAgreementUploadPage;

const pages = {
  start: startPage,
  "legal-agreement-upload": legalAgreementUploadPage,
  "legal-agreement-check": legalAgreementCheckFilePage,
  "legal-agreement-type": legalAgreementTypePage,
  "need-legal-agreement": legalAgreementNeedpage,
  "add-legal-agreement-parties": legalAgreementAddPartiesPage,
  "legal-agreement-start-date": legalAgreementStartDatePage,
  "check-legal-agreement-details": legalAgreementCheckDetailsPage,
  "management-plan-upload": managementPlanUploadPage,
  "management-plan-check": managementPlanCheckPage,
  "register-land-task-list": taskListPage,
  "location-options": landBoundaryChooseUploadOptionPage,
  "upload-geospatial-file": landBoundaryUploadGeospatialPage,
  "land-boundary-upload": landBoundaryUploadImageFilePage,
  "land-boundary-check": landBoundaryCheckImageFilePage,
  "check-land-boundary-details": landBoundaryCheckImageDetailsPage,
  "metric-upload": metricUploadPage,
  "metric-check": metricCheckPage,
  "land-ownership-upload": landOwnershipUploadPage,
  "land-ownership-check": landOwnershipCheckPage,
  "registered-landowner": landownershipRegisteredLandownerPage,
  "add-landowners": landownershipAddLandowners,
  "grid-reference": gridReferencePage,
  "add-hectares": addHectaresPage,
  "habitat-works-start-date": habitatWorksStartDatePage,
  "monitoring-start-date": monitoringStartDatePage
};

Given(/^I (?:am on|navigate to) the "(.*)" page$/, async (page) => {
  // open the page requested from the list of pages
  page = page.toLowerCase();
  await pages[page].open();

  await $("h1").waitForExist({ timeout: 5000 });

  // assert against the page title
  expect(await browser.getTitle()).toContain(pages[page].titleText);
});

Then(/^I should be (?:on|returned to) the "(.*)" page$/, async (page) => {
  await $("h1").waitForExist({ timeout: 5000 });

  // assert against the page title
  await expect(await browser.getTitle()).toContain(pages[page].titleText);
});

When("I continue without an action", async () => {
  // click continue
  await basePage.continueButton.click();
});

When("I select {string} and continue", async (option) => {

  switch (option) {
    case "conservation covenant": {
      await legalAgreementTypePage.conservationCovenant.click();
      break;
    }
    case "planning obligation": {
      await legalAgreementTypePage.planningObligation.click();
      break;
    }
    case "I do not have a legal agreement": {
      await legalAgreementTypePage.doNotHaveDocument.click();
      break;
    }
    case "Other role": {
      (await legalAgreementAddPartiesPage.otherLegalPartyRoleOption).click();
      break;
    }
  }

  (await basePage.continueButton).click();
});

When("I select other role", async () => {
  (await legalAgreementAddPartiesPage.otherLegalPartyRoleOption).click();
}); 

When("I add my fullname or organisation as {string}", async (fullname) => {
  await legalAgreementAddPartiesPage.legalPartyName.addValue(fullname);
})

When("I confirm my role as a {string}", async (role) => {
  //Todo: currently no unique identifiers in code awaiting bug fixes in BNGP-1267
  await legalAgreementAddPartiesPage.legalPartyRole.waitForExist({ timeout: 5000 });
  await legalAgreementAddPartiesPage.legalPartyRole.click();
  await legalAgreementAddPartiesPage.continueButton.click();  
})

When("I enter a valid start date of {string}", async (date) => {

  var arr = date.split('/');

  await basePage.Day.addValue(arr[0]);
  await basePage.Month.addValue(arr[1]);
  await basePage.Year.addValue(arr[2]);
  await (await basePage.continueButton).click();
 
});

When("I enter an invalid start date of {string}", async (date) => {
  var arr = date.split('/');

  await basePage.Day.addValue(arr[0]);
  await basePage.Month.addValue(arr[1]);
  await basePage.Year.addValue(arr[2]);
  await (await basePage.continueButton).click();

});


When("I choose to change the {string}", async (option) => {
  if(option == "parties involved"){
    await (await legalAgreementCheckDetailsPage.changeParties).click();
  }
});


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

Then("the other role value should not be {string}", async (input) => {
  await expect(basePage.otherRoleTextBox).not.toHaveValue(input);
});


