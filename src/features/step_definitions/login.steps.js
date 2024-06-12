const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require("../page_objects/login.page");
const TaskListPage = require("../page_objects/register-land-task-list.page");
const username = process.env.BNG_FE_LOGIN_USER;
const password = process.env.BNG_FE_LOGIN_PASSWORD;


When ("I login to the Government Gateway", async () => {
    await $("h1").waitForExist();
    
    // assert against the page title
    expect(await browser.getTitle()).toContain(LoginPage.titleText);


      //user associated to just an individual
    await LoginPage.login(username, password);

    //user associated to an org
    // await login("894836023882", "ChristopherWallace");
  })

  Then("I am logged in to the service", async () => { 
    await LoginPage.isLoggedIn();
  })

  Then("I should be able to continue with my previous journey", async () => {
    return "pending";
    })

