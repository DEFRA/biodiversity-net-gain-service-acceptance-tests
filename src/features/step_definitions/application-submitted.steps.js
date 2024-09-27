const {Then} = require("@wdio/cucumber-framework");
const ApplicationSubmittedPage = require("../page_objects/application-submitted.page");
const CreditsPurchaseApplicationSubmittedPage = require("../page_objects/credits-purchase/application-submitted.page.js");

const applicationSubmittedPage = new ApplicationSubmittedPage();
const creditsPurchaseApplicationSubmittedPage = new CreditsPurchaseApplicationSubmittedPage();


Then("The {string} reference should be displayed", async (refnumber) => {
        switch (refnumber) {
        case "biodiversity gain site": {
                await expect(applicationSubmittedPage.referenceNumber).toBeDisplayed();
                await expect(applicationSubmittedPage.referenceNumber).toHaveText(expect.stringContaining("BNGREG"));
        break;
        }
        case "biodiversity credit": {
                await expect(creditsPurchaseApplicationSubmittedPage.referenceNumber).toBeDisplayed();
                await expect(creditsPurchaseApplicationSubmittedPage.referenceNumber).toHaveText(expect.stringContaining("BNGCRD"));
        break;
        }
        default:{
                throw new Error(`BNG reference number ${refnumber} doesn't exist`);
              } 
}});

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