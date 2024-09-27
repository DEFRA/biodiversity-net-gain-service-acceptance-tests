const { Given, When, Then } = require("@wdio/cucumber-framework");
const CombinedCaseApplicationListPage = require("../page_objects/combined_case/combined-case-projects.page.js");
const combinedCaseApplicationListPage = new CombinedCaseApplicationListPage();

When("I choose to register a gain site and allocate to a development", async () => {
    // assert against the page title
    // await $("h1").waitForExist({ timeout: 5000 });
    expect(await browser.getTitle()).toContain(combinedCaseApplicationListPage.titleText); 

    await combinedCaseApplicationListPage.registerNewGainSiteAndAllocateLink.click();
});