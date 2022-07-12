const { Given, Then } = require("@wdio/cucumber-framework");
const StartPage = require("../page_objects/start.page");
const PlanningObligationUpload = require("../page_objects/planning-obligation-upload.page");
const PlanningObligationCheck = require("../page_objects/planning-obligation-check.page");
const TaskListPage = require("../page_objects/task-list.page");
const LandBoundaryChooseUploadOption = require("../page_objects/land_boundary/choose-upload-option.page");
const LandBoundaryUploadGeospatial = require("../page_objects/land_boundary/upload-geospatial.page");
const LandBoundaryUploadImageFile = require("../page_objects/land_boundary/upload-lmage-file.page");
const LandBoundaryConfirm = require("../page_objects/land_boundary/confirm-land-boundary.page");
const pages = {
  start: StartPage,
  "upload-planning-obligation": PlanningObligationUpload,
  "check-planning-obligation": PlanningObligationCheck,
  "task-list": TaskListPage,
  "choose-land-boundary-upload-option": LandBoundaryChooseUploadOption,
  "upload-geospatial": LandBoundaryUploadGeospatial,
  "upload-image": LandBoundaryUploadImageFile,
  "confirm-land-boundary": LandBoundaryConfirm,
};

Given(/^I (?:am on|navigate to) the "(.*)" page$/, async (page) => {
  // open the page requested from the list of pages
  page = page.toLowerCase();
  await pages[page].open();

  // assert against the page title
  await expect(browser).toHaveTitleContaining(pages[page].Title);
});

Then(/^I should be (?:on|returned to) the "(.*)" page$/, async (page) => {
  // assert against the page title
  await expect(browser).toHaveTitleContaining(pages[page].Title);
});
