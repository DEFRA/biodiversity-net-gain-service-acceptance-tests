const { Then } = require("@wdio/cucumber-framework");
const applicationSubmittedPage = require("../page_objects/application-submitted.page");

Then("the biodiversity gain site reference should be displayed", async ()  => {

        await expect(applicationSubmittedPage.referenceNumber).toBeDisplayed();
        await expect(applicationSubmittedPage.referenceNumber).toHaveTextContaining("REF");
});