const { Then } = require("@wdio/cucumber-framework");
const registrationSubmittedPage = require("../page_objects/registration-submitted.page");

Then("the biodiversity gain site reference should be displayed", async ()  => {

        await expect(registrationSubmittedPage.referenceNumber).toBeDisplayed();
        await expect(registrationSubmittedPage.referenceNumber).toHaveTextContaining("BNGREG");
});