const { Given, When, Then } = require("@wdio/cucumber-framework");
const StartPage = require("../page_objects/start");
const PlanningObligationUpload = require("../page_objects/planning-obligation-upload");
const PlanningObligationCheck = require("../page_objects/planning-obligation-check");
const TaskListPage = require("../page_objects/task-list");
const LandBoundaryChooseUploadOption = require("../page_objects/land_boundary/choose-upload-option");
const LandBoundaryUploadGeospatial = require("../page_objects/land_boundary/upload-geospatial");
const LandBoundaryUploadImageFile = require("../page_objects/land_boundary/upload-lmage-file");

const pages = {
  start: StartPage,
  "upload-planning-obligation": PlanningObligationUpload,
  "check-planning-obligation": PlanningObligationCheck,
  "task-list": TaskListPage,
  "location-options": LandBoundaryChooseUploadOption,
  "upload-geospatial-file": LandBoundaryUploadGeospatial,
  "upload-image-file": LandBoundaryUploadImageFile,
};

Given(/^I (?:am on|navigate to) the "(.*)" page$/, async (page) => {
  // open the page requested from the list of pages
  page = page.toLowerCase();
  await pages[page].open();

  const pageUrl = await browser.getUrl();

  // assert against page url and page title
  await expect(pageUrl).toContain(page);
  await expect(await browser.getTitle()).toContain(pages[page].Title);

  console.log("I expect " + pageUrl + " to contain " + page);
  console.log("The Title is " + (await browser.getTitle()));
});

Then(/^I should be (?:on|returned to) the "(.*)" page$/, async (page) => {
  const pageUrl = await browser.getUrl();

  // assert against page url and page title
  await expect(pageUrl).toContain(page);
  await expect(await browser.getTitle()).toContain(pages[page].Title);

  console.log("I should be on this page: " + pageUrl);
});
