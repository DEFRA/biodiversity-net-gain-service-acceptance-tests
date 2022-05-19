const { Given, When, Then } = require("@wdio/cucumber-framework");

const PlanningObligationUpload = require("../page-objects/planning-obligation-upload");

const pages = {
  PlanningObligationUpload,
};
// Given(/^I am on the (.*) upload page$/, async (page) => {
//   await pages[page].open();

//   const pageTitle = await browser.getTitle();
// });
