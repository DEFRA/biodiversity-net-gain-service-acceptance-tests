const { Given, Then } = require("@wdio/cucumber-framework");
const StartPage = require("../page_objects/start.page");
const LegalAgreementUpload = require("../page_objects/legal_agreement/legal-agreement-upload.page");
const LegalAgreementCheck = require("../page_objects/legal_agreement/legal-agreement-check.page");
const ManagementPlanUpload = require("../page_objects/management_plan/management-plan-upload.page");
const ManagementPlanCheck = require("../page_objects/management_plan/management-plan-check.page");
const TaskListPage = require("../page_objects/task-list.page");
const LandBoundaryChooseUploadOption = require("../page_objects/land_boundary/choose-upload-option.page");
const LandBoundaryUploadGeospatial = require("../page_objects/land_boundary/upload-geospatial.page");
const LandBoundaryUploadImageFile = require("../page_objects/land_boundary/upload-land-boundary-file.page");
const legalAgreementUploadPage = require("../page_objects/legal_agreement/legal-agreement-upload.page");

const basePage = legalAgreementUploadPage;

const pages = {
  start: StartPage,
  "legal-agreement-upload": LegalAgreementUpload,
  "legal-agreement-check": LegalAgreementCheck,
  "management-plan-upload": ManagementPlanUpload,
  "management-plan-check": ManagementPlanCheck,
  "task-list": TaskListPage,
  "location-options": LandBoundaryChooseUploadOption,
  "upload-geospatial-file": LandBoundaryUploadGeospatial,
  "upload-image-file": LandBoundaryUploadImageFile,
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
  // assert against the page title
  await expect(await browser.getTitle()).toContain(pages[page].titleText);
});

Then("I continue without an action", async () => {
  // click continue
  await basePage.continueButton.click();
});

Then("I should see the error {string}", async (message) => {
  // check errorMsg text
  await expect(basePage.errorMsg).toHaveTextContaining(message);
});
