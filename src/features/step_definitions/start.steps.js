const { Given, When, Then } = require("@wdio/cucumber-framework");
const startPage = require("../page_objects/start.page");

Given("I am a returning user", async () => {
  return "pending";
});

Given ("I start my registration", async () => {
  // start
  await (await startPage.startButton).click();
}) 

When("I Sign In to the register", async () => {
  return "pending";
});

Then("I should be able to continue with my previous journey", async () => {
  return "pending";
  }
);

Then("I should see the heading text {string}", async (message) => {
  await expect(startPage.getHeading).toBeExisting();
  await expect(startPage.getHeading).toHaveTextContaining(message);
});