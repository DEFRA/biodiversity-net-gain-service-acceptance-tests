const { Given, When, Then } = require("@wdio/cucumber-framework");
// const allureReporter = require("@wdio/allure-reporter").default;

const StartPage = require("../page-objects/start");

// Then(/^I should see the header with text saying (.*)$/, async (message) => {
//   await expect(StartPage.getHeading).toBeExisting();
//   await expect(StartPage.getHeading).toHaveTextContaining(message);
// });

Then("I should see the header with text saying {string}", async (message) => {
  expect(StartPage.getHeading).toBeExisting();
  expect(StartPage.getHeading).toHaveTextContaining(message);
});
