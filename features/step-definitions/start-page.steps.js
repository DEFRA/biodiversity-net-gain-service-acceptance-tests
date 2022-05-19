const { Given, When, Then } = require("@wdio/cucumber-framework");

const StartPage = require("../page-objects/start");

Then("I should see the header with text saying {string}", async (message) => {
  expect(StartPage.getHeading).toBeExisting();
  expect(StartPage.getHeading).toHaveTextContaining(message);
});

Given("I am a returning user", async function () {
  return "pending";
});

When("I Sign In to the register", async function () {
  return "pending";
});

Then(
  "I should be able to continue with my previous journey",
  async function () {
    return "pending";
  }
);
