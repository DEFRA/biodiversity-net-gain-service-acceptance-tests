const { Given, When } = require("@wdio/cucumber-framework");
const RegisterTaskListPage = require("../page_objects/register-land-task-list.page");
const landOwnershipProofListPage = require("../page_objects/land_ownership/ownership-proof-list.page");
const TaskList = new RegisterTaskListPage();


Given("I have completed the land-ownership section", async () => {
    await completeLandOwnershipSection("John Smith",);
  })

async function completeLandOwnershipSection(fullname) {

  //And I confirm i have added allproof of landownership files
  // multiple file addition page_object needs adding
  // assert against the page title
  await $("h1").waitForExist();
  expect(await browser.getTitle()).toContain(landOwnershipProofListPage.titleText);

  await landOwnershipProofListPage.radioYes.click();
  await landOwnershipProofListPage.continueButton.click();

  //tasklist section shows as complete
  expect(await browser.getTitle()).toContain(TaskList.titleText);
  await expect(TaskList.landOwnershipStatus).toHaveText("Completed");  
  }

