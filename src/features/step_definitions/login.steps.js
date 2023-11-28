const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require("../page_objects/login.page");

When ("I login to the Government Gateway", async () => {
    await $("h1").waitForExist();
    
    // assert against the page title
    expect(await browser.getTitle()).toContain(LoginPage.titleText);


      //user associated to just an individual
    await login("528250494194", "ChristopherWallace");

    //user associated to an org
    // await login("894836023882", "ChristopherWallace");
  })

  Then("I am logged in to the service", async () => {
    /* set a wait for the gove gateway creds to redirect back to the service 
    todo: this is very flaky and not sure its the best way to achieve this */    
    await browser.pause(5000);

    //check that we are logged in and not still on the sign in page
    var pageUrl = browser.getUrl();
    expect(await pageUrl).not.toContain('https://www.ete.access.service.gov.uk/login/signin/creds')

    // expect(await LoginPage.titleHeader).toContain("Who do you want to represent?");
    // await LoginPage.radioDefraIdChooseIndiviual.click();
    // await LoginPage.continuButtonReplacement.click();
  })

  async function login(gatewayid, password) {
    await (LoginPage.UserID).addValue(gatewayid);
    await (LoginPage.Password).addValue(password);
    
    await browser.pause(5000);
    await (LoginPage.SignInBtn).click();
}


