import { When } from "@cucumber/cucumber";
import LoginPage from "../page_objects/login.page";

When ("I login to the Government Gateway", async () => {
    await $("h1").waitForExist();
    // assert against the page title
    expect(await browser.getTitle()).toContain(LoginPage.titleText);

    await login("894836023882", "ChristopherWallace");
  })

  async function login(gatewayid, password) {
    await (LoginPage.UserID).addValue(gatewayid);
    await (LoginPage.Password).addValue(password);
    await browser.pause(5000);
    await (LoginPage.SignInBtn).click();

    /* set a wait for the gove gateway creds to redirect back to the service 
    todo: this is very flaky and not sure its the best way to achieve this */
    await browser.pause(5000);
    var pageUrl = browser.getUrl();
    expect(await pageUrl).not.toContain('https://www.ete.access.service.gov.uk/login/signin/creds')
}


