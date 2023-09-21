const { Given, When } = require("@wdio/cucumber-framework");
const checkOwnershipDetailsPage = require("../page_objects/land_ownership/check-ownership-details.page");
const addLandownersPage = require("../page_objects/land_ownership/add-landowners.page");
const landOwnerConsentPage = require("../page_objects/land_ownership/land-owner-consent.page");

Given("I have completed the land-ownership section", async () => {
    await completeLandOwnershipSection();
  })

async function completeLandOwnershipSection() {

  //Add a single landowner
  await addLandownersPage.addlandowner("John Smith");

  //confirm authenticated users consent for landowner on the consent page
  await (landOwnerConsentPage.landownerConsentChkBox).click();
  await landOwnerConsentPage.continueButton.click();

  // confirm on the cya page
  await (checkOwnershipDetailsPage.continueButton).click();
    
  }

