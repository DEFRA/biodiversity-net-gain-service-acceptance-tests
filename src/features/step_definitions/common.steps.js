const { Given, When, Then } = require("@wdio/cucumber-framework");
const startPage = require("../page_objects/start.page");
const legalAgreementTypePage = require("../page_objects/legal_agreement/legal-agreement-type.page");
const legalAgreementNeedpage = require("../page_objects/legal_agreement/need-legal-agreement.page");
const legalAgreementUploadPage = require("../page_objects/legal_agreement/upload-legal-agreement.page");
const legalAgreementCheckFilePage = require("../page_objects/legal_agreement/check-legal-agreement-file.page");
const legalAgreementAddPartiesPage = require("../page_objects/legal_agreement/add-legal-agreement-parties");
const legalAgreementStartDatePage = require("../page_objects/legal_agreement/legal-agreement-start-date.page");
const legalAgreementCheckDetailsPage = require("../page_objects/legal_agreement/check-legal-agreement-details.page");
const managementPlanUploadPage = require("../page_objects/management_plan/management-plan-upload.page");
const managementPlanCheckPage = require("../page_objects/management_plan/management-plan-check.page");
const taskListPage = require("../page_objects/register-land-task-list.page");
const landBoundaryChooseUploadOptionPage = require("../page_objects/land_boundary/choose-upload-option.page");
const landBoundaryUploadGeospatialPage = require("../page_objects/land_boundary/upload-geospatial.page");
const landBoundaryUploadImageFilePage = require("../page_objects/land_boundary/upload-land-boundary.page");
const landBoundaryCheckImageFilePage = require("../page_objects/land_boundary/check-land-boundary-file.page");
const metricUploadPage = require("../page_objects/metric/metric-upload.page");
const metricCheckPage = require("../page_objects/metric/metric-check.page");
const landOwnershipUploadPage = require("../page_objects/land_ownership/land-ownership-upload.page");
const landOwnershipCheckPage = require("../page_objects/land_ownership/land-ownership-check.page");
const gridReferencePage = require("../page_objects/land_boundary/grid-reference.page");
const addHectaresPage = require("../page_objects/land_boundary/add-hectares.page");
const habitatWorksStartDatePage = require("../page_objects/management_plan/habitat-works-start-date.page");
const monitoringStartDatePage = require("../page_objects/management_plan/monitoring-start-date.page");

const basePage = legalAgreementUploadPage;

const pages = {
  start: startPage,
  "upload-legal-agreement": legalAgreementUploadPage,
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
  "metric-upload": metricUploadPage,
  "metric-check": metricCheckPage,
  "land-ownership-upload": landOwnershipUploadPage,
  "land-ownership-check": landOwnershipCheckPage,
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

let choice = "";

  switch (option) {
    case "conservation covenant": {
      choice = legalAgreementTypePage.conservationCovenant;
      break;
    }
    case "planning obligation": {
      choice = legalAgreementTypePage.planningObligation;
      break;
    }
    case "I do not have a legal agreement": {
      choice = legalAgreementTypePage.doNotHaveDocument;
      break;
    }
  }

  await (await choice).click();
  await (await legalAgreementTypePage.continueButton).click();
});

When("I add my fullname or organisation as {string}", async (fullname) => {
  await legalAgreementAddPartiesPage.legalPartyName.addValue(fullname);
})

When("I confirm my role as a {string}", async (role) => {
  //Todo: currently no unique identifiers in code awaiting bug fixes in BNGP-1267
  await legalAgreementAddPartiesPage.legalPartyRole.waitForExist({ timeout: 5000 });
  await legalAgreementAddPartiesPage.legalPartyRole.click();
  await legalAgreementAddPartiesPage.legalContinueButton.click();
  
})

When("I enter a valid startdate of {string} for the {string} page", async (date, page) => {

  var arr = date.split('/');

  switch (page) {
    case "habitat-works-start-date": {
          await habitatWorksStartDatePage.Day.addValue(arr[0]);
          await habitatWorksStartDatePage.Month.addValue(arr[1]);
          await habitatWorksStartDatePage.Year.addValue(arr[2]);
          await (await habitatWorksStartDatePage.continueButton).click();
      break;
    }
    case "legal-agreement-start-date": {
          await legalAgreementStartDatePage.Day.addValue(arr[0]);
          await legalAgreementStartDatePage.Month.addValue(arr[1]);
          await legalAgreementStartDatePage.Year.addValue(arr[2]);
          await (await legalAgreementStartDatePage.continueButton).click();
      break;
    } 
    default:
    break
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


