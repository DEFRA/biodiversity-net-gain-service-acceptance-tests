const { Then } = require("@wdio/cucumber-framework");
const registrationSubmittedPage = require("../page_objects/registration-submitted.page");

Then("the biodiversity gain site reference should be displayed", async ()  => {
      
        expect(await registrationSubmittedPage.referenceNumber).toBeDisplayed
        expect(await registrationSubmittedPage.referenceNumber).toContain("REF")
});