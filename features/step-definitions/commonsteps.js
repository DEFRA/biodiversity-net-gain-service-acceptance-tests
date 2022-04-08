const { Given, When, Then } = require("@wdio/cucumber-framework");

const StartPage = require("../pageobjects/start.page");

const pages = {
  start: StartPage,
};

Given(/^I am on the (\w+) page$/, async (page) => {
  await pages[page].open();

  const pageTitle = await browser.getTitle();

  //assert against page title
  await expect(pageTitle).toContain(
    "Register land for off-site biodiversity gain"
  );
});
