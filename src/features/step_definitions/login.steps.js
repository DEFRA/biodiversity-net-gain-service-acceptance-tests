import { When } from "@cucumber/cucumber";
import LoginPage from "../page_objects/login.page";

When ("I login to the Government Gateway", async () => {
    await (LoginPage.UserID).addValue("894836023882");
    await (LoginPage.Password).addValue("ChristopherWallace");
    await (LoginPage.SignInBtn).click();

    /* set a wait for the gove gateway creds to redirect back to the service 
    todo: this is very flaky and not sure its the best way to achieve this */
    await browser.pause(10000);

  })