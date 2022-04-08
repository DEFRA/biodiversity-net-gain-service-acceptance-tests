const { Given, When, Then } = require("@wdio/cucumber-framework");

const StartPage = require("../pageobjects/start.page");

Then(/^I should see the header with text saying (.*)$/, async (message) => {
  await expect(StartPage.getHeading).toBeExisting();
  await expect(StartPage.getHeading).toHaveTextContaining(message);
});
