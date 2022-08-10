const { Given, When, Then } = require("@wdio/cucumber-framework");
const StartPage = require("../page_objects/start.page");

Then("I should see the heading text {string}", async (message) => {
  await expect(StartPage.getHeading).toBeExisting();
  await expect(StartPage.getHeading).toHaveTextContaining(message);
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
