import { When } from "@cucumber/cucumber";
import LoginPage from "../page_objects/login.page";

When ("I login to the Government Gateway", async () => {
    await $("h1").waitForExist({ timeout: 5000 });
    // assert against the page title
    expect(await browser.getTitle()).toContain(LoginPage.titleText);

    
    await (LoginPage.UserID).addValue("894836023882");
    await (LoginPage.Password).addValue("ChristopherWallace");
    await browser.pause(20000);
    await (LoginPage.continueButton).click();
    expect

    /* set a wait for the gov gateway creds to redirect back to the service 
    // todo: this is very flaky and not sure its the best way to achieve this */
    await browser.pause(20000);

  })