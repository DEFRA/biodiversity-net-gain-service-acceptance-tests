const { Given, When, Then } = require('@wdio/cucumber-framework');
const BiodiversityGainSitesPage = require('../page_objects/biodiversity-gain-sites.page');
const biodiversityGainSitesPage = new BiodiversityGainSitesPage();

When("I choose to start a new registration", async () => {
        // assert against the page title
        await $("h1").waitForExist({ timeout: 5000 });
        expect(await browser.getTitle()).toContain(biodiversityGainSitesPage.titleText);

       await biodiversityGainSitesPage.registerNewGainSiteLink.click();
  });