const { Given, When, Then } = require('@wdio/cucumber-framework');
const ManageBngPage = require("../page_objects/manage-biodiversity-gains.page");
const manageBngPage = new ManageBngPage();

Given("I choose to manage biodiversity gains", async () => {
   
        // assert against the page title and on the manage BNG page
        await $("h1").waitForExist();

       // nav bar manage link
       await manageBngPage.manageBngNavLink.click();
  });

Given("I choose to manage my gain sites", async () => {

        // assert against the page title and on the manage BNG page
        await $("h1").waitForExist();
        expect(await browser.getTitle()).toContain(manageBngPage.titleText);

        await manageBngPage.manageGainSitesLink.click();
});

Given("I choose to buy statutory biodiversity credits", async () => {

        // assert against the page title and on the manage BNG page
        await $("h1").waitForExist();
        expect(await browser.getTitle()).toContain(manageBngPage.titleText);

        await manageBngPage.manageCreditApplicationsLink.click();
});

When("I choose to manage my off-site gains for my development projects", async () => {

        // assert against the page title and on the manage BNG page
        await $("h1").waitForExist();
        expect(await browser.getTitle()).toContain(manageBngPage.titleText);

        await expect(manageBngPage.manageOffSiteDevelopmentGainsLink).toExist();
        await manageBngPage.manageOffSiteDevelopmentGainsLink.click();
})


When("I choose to register a gain site and record off site gains at the same time", async () => {

        // assert against the page title and on the manage BNG page
        await $("h1").waitForExist();
        expect(await browser.getTitle()).toContain(manageBngPage.titleText);

        await expect(manageBngPage.manageCombinedCaseLink).toExist();
        await manageBngPage.manageCombinedCaseLink.click();
})


