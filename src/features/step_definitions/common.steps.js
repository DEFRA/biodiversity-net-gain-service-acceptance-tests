const { Given, Then } = require("@wdio/cucumber-framework");
const StartPage = require("../page_objects/start.page");
const LegalAgreementUpload = require("../page_objects/legal_agreement/legal-agreement-upload.page");
const LegalAgreementCheck = require("../page_objects/legal_agreement/legal-agreement-check.page");
const TaskListPage = require("../page_objects/task-list.page");
const LandBoundaryChooseUploadOption = require("../page_objects/land_boundary/choose-upload-option.page");
const LandBoundaryUploadGeospatial = require("../page_objects/land_boundary/upload-geospatial.page");
const LandBoundaryUploadImageFile = require("../page_objects/land_boundary/upload-lmage-file.page");
const pages = {
  start: StartPage,
  "legal-agreement-upload": LegalAgreementUpload,
  "legal-agreement-check": LegalAgreementCheck,
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
