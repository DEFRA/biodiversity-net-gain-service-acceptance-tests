const { Given, When, Then } = require('@wdio/cucumber-framework');
const manageBngPage = require("../page_objects/manage-biodiversity-gains.page");

When("I choose to manage my biodiversity gains", async () => {
   
        // assert against the page title and on the manage BNG page
        await $("h1").waitForExist();

       // nav bar manage link
       await manageBngPage.manageBngNavLink.click();
  });

When("I choose to manage my gain sites", async () => {

        // assert against the page title and on the manage BNG page
        await $("h1").waitForExist();
        expect(await browser.getTitle()).toContain(manageBngPage.titleText);

        await manageBngPage.manageGainSiteslink.click();
});


