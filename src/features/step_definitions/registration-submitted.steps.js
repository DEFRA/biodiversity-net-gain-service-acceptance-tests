const { Then } = require("@wdio/cucumber-framework");
const registrationSubmittedPage = require("../page_objects/registration-submitted.page");

Then("the biodiversity gain site reference should be displayed with the BNG transaction type of {string}", async (transactionType)  => {
        await expect(registrationSubmittedPage.referenceNumber).toBeDisplayed();
        await expect(registrationSubmittedPage.referenceNumber).toHaveTextContaining(transactionType);
});