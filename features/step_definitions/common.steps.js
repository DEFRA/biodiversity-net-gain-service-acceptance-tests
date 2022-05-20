const { Given, When, Then } = require("@wdio/cucumber-framework");

const StartPage = require("../page_objects/start");
const PlanningObligationUpload = require("../page_objects/planning-obligation-upload");
const PlanningObligationCheck = require("../page_objects/planning-obligation-check");
const TaskListPage = require("../page_objects/task-list");

const pages = {
  start: StartPage,
  "planning-obligation-upload": PlanningObligationUpload,
  "planning-obligation-check": PlanningObligationCheck,
  "task-list": TaskListPage,
};

Given(/^I am on the "(.*)" page$/, async (page) => {
  await pages[page].open();

  const pageUrl = await browser.getUrl();

  // assert against page url
  await expect(pageUrl).toContain(page);
  console.log(pageUrl);
});

When("I navigate to the {string} page", async function (page) {
  await pages[page].open();

  const pageUrl = await browser.getUrl();

  // assert against page url
  await expect(pageUrl).toContain(page);
  console.log(pageUrl);
});

Then(/^I should be (?:on|returned to) the "(.*)" page$/, async (page) => {
  const pageUrl = await browser.getUrl();

  // assert against page url
  await expect(pageUrl).toContain(page);
  console.log("I should be on this page: " + pageUrl);
});
