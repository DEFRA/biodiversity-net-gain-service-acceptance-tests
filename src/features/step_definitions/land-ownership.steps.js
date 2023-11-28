const { Given, When } = require("@wdio/cucumber-framework");
const landOwnershipProofListPage = require("../page_objects/land_ownership/ownership-proof-list.page");
const tasklistPage = require("../page_objects/register-land-task-list.page");
const addLandownersPage = require("../page_objects/land_ownership/add-landowners.page");
const landOwnerConsentPage = require("../page_objects/land_ownership/land-owner-consent.page");
const landOwnershipCheckDetailsPage = require("../page_objects/land_ownership/check-ownership-details.page");

Given("I have completed the land-ownership section", async () => {
    await completeLandOwnershipSection("John Smith",);
  })

async function completeLandOwnershipSection(fullname) {


  //And I add all registered landowners 
  await $("h1").waitForExist({ timeout: 5000 });
  expect(await browser.getTitle()).toContain(addLandownersPage.titleText);

  await addLandownersPage.addlandowner(fullname);
  await addLandownersPage.continueButton.click();

  // //And I confirm i have added allproof of landownership files
  // // multiple file addition page_object needs adding
  // // assert against the page title
  // await $("h1").waitForExist({ timeout: 5000 });
  // expect(await browser.getTitle()).toContain(landOwnershipProofListPage.titleText);
  // await landOwnershipProofListPage.radioYes.click();
  // await landOwnershipProofListPage.continueButton.click();


  //Landowner consent
  await $("h1").waitForExist({ timeout: 5000 });
  expect(await browser.getTitle()).toContain(landOwnerConsentPage.titleText);
  await landOwnerConsentPage.landownerConsentChkBox.click();
  await landOwnerConsentPage.continueButton.click();

  //Check the landownership details
  expect(await browser.getTitle()).toContain(landOwnershipCheckDetailsPage.titleText);
  await landOwnershipCheckDetailsPage.continueButton.click();

  //tasklist section shows as complete
  expect(await browser.getTitle()).toContain(tasklistPage.titleText);
  await expect(tasklistPage.landOwnershipStatus).toHaveTextContaining("COMPLETED");  
  }

