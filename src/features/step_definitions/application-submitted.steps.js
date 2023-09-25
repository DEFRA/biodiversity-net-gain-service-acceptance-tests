const { Then } = require("@wdio/cucumber-framework");
const applicationSubmittedPage = require("../page_objects/application-submitted.page");

Then("The biodiversity gain site reference should be displayed", async () => {
        await expect(applicationSubmittedPage.referenceNumber).toBeDisplayed();
        await expect(applicationSubmittedPage.referenceNumber).toHaveTextContaining("BNGREG");
});

Then("The fee amount of {string} should be displayed", async(fee) =>{
        await expect(applicationSubmittedPage.feeAmount).toHaveText(fee);
})