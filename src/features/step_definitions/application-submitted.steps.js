const {Then} = require("@wdio/cucumber-framework");
const applicationSubmittedPage = require("../page_objects/application-submitted.page");

Then("The biodiversity gain site reference should be displayed", async () => {
        await expect(applicationSubmittedPage.referenceNumber).toBeDisplayed();
        await expect(applicationSubmittedPage.referenceNumber).toHaveTextContaining("BNGREG");
});

Then("The fee amount of {string} should be displayed", async(fee) =>{
        await expect(applicationSubmittedPage.feeAmount).toBeDisplayed()
        await expect(applicationSubmittedPage.feeAmount).toHaveText(fee);
})

Then("The account number {string} should be displayed", async(account) =>{
        await expect(applicationSubmittedPage.accountNumber).toBeDisplayed();
        await expect(applicationSubmittedPage.accountNumber).toHaveText(account);
})

Then("The sort code {string} should be displayed", async(sortcode) =>{
        await expect(applicationSubmittedPage.sortCode).toBeDisplayed();
        await expect(applicationSubmittedPage.sortCode).toHaveText(sortcode);
})

Then("The swift code {string} should be displayed", async(swiftcode) =>{
        await expect(applicationSubmittedPage.swiftBicCode).toBeDisplayed();
        await expect(applicationSubmittedPage.swiftBicCode).toHaveText(swiftcode);
})

Then("the fee amount should not be displayed", async() =>{
        await expect(applicationSubmittedPage.referenceNumber).not.toBeDisplayed();
})