const { Given, When, Then } = require("@wdio/cucumber-framework");
const startPage = require("../page_objects/start.page");
const LoginPage = require ("../page_objects/login.page");

Given("I am a returning user", async () => {
  return "pending";
});

Given ("I start my registration", async () => {
  // await startPage.AcceptCookiesBtn.click();

  // start
  await (await startPage.startButton).click();
  
  //Login to gov gateway
  await login("894836023882", "ChristopherWallace");
  
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

async function login(gatewayid, password) {
    await (LoginPage.UserID).addValue(gatewayid);
    await (LoginPage.Password).addValue(password);
    await browser.pause(10000);
    await (LoginPage.SignInBtn).click();

    /* set a wait for the gove gateway creds to redirect back to the service 
    todo: this is very flaky and not sure its the best way to achieve this */
    await browser.pause(10000);
}