const { Given, When } = require("@wdio/cucumber-framework");
const checkOwnershipDetailsPage = require("../page_objects/land_ownership/check-ownership-details.page");
const registeredLandownerPage = require("../page_objects/land_ownership/registered-landowner.page");

Given("I have completed the land-ownership section", async () => {
    await completeLandOwnershipSection();
  })

When("I confirm I am the only landowner", async() => {
    await confirmOnlyLandowner();
});

async function confirmOnlyLandowner() {
    (await registeredLandownerPage.onlyLandownerRadio).click();
    (await registeredLandownerPage.continueButton).click();
}

async function completeLandOwnershipSection() {
    await confirmOnlyLandowner();
    
    // confirm on the cya page
    await (checkOwnershipDetailsPage.continueButton).click();
    
  }

