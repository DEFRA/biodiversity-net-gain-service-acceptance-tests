const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require("../page_objects/login.page");
const TaskListPage = require("../page_objects/register-land-task-list.page");


When ("I login to the Government Gateway", async () => {
    await $("h1").waitForExist();
    
    // assert against the page title
    expect(await browser.getTitle()).toContain(LoginPage.titleText);
    
    await LoginPage.login("528250494194", "ChristopherWallace");
  })

  Then("I am logged in to the service", async () => {
    /* set a wait for the gove gateway creds to redirect back to the service 
    todo: this is very flaky and not sure its the best way to achieve this */    
    await browser.pause(5000);

    //check that we are logged in and not still on the sign in page
    var pageUrl = browser.getUrl();
    expect(await pageUrl).not.toContain('https://www.ete.access.service.gov.uk/login/signin/creds')
    expect(await pageUrl).not.toContain('https://dcidmtest.b2clogin.com')


    //If a new application then will redirect to the tasklist page Todo: get the Jira page
    // #Landing page - tasklist for new session (TODO refine after)
    // as random landing at the moment
    // await $("h1").waitForExist();
    // expect(await browser.getTitle()).toContain(TaskListPage.titleText);

  })


