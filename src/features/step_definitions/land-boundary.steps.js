const { Given, When, Then } = require("@wdio/cucumber-framework");
const LandboundaryFileChoices = require("../page_objects/land_boundary/choose-land-boundary-upload.page");
const GridReferencePage = require("../page_objects/land_boundary/grid-reference.page");
const AddHectaresPage = require("../page_objects/land_boundary/add-hectares.page");
const CheckLandBoundaryDetailsPage = require("../page_objects/land_boundary/check-land-boundary-details.page");
const RegisterTaskListPage = require("../page_objects/register-land-task-list.page");

const landboundaryFileChoices = new LandboundaryFileChoices();
const gridReferencePage = new GridReferencePage();
const addHectaresPage = new AddHectaresPage();
const checkLandBoundaryDetailsPage = new CheckLandBoundaryDetailsPage();
const TaskList = new RegisterTaskListPage();

Given("I have completed the land-boundary section", async () => {
  await completeLandBoundarySection("TL6233", "1231.11");
})

When("I add a valid grid reference {string}", async (gridreference) => {
  await gridReferencePage.addGridReference(gridreference);
});

When("I add an invalid grid reference {string}", async (gridreference) => {
  await (await gridReferencePage.getGridRef).clearValue();
  await gridReferencePage.getGridRef.addValue(gridreference);
  await (await gridReferencePage.continueButton).click();
  await expect(gridReferencePage.errorMsg).toBeDisplayed();
});

When("I add total hectares as {string}", async (value) => {
  await addHectaresPage.addHectares(value);
});

Then(/^I choose to upload (?:a|an) "(.*)" file$/, async (fileType) => {
    await landboundaryFileChoices.chooseLandboundaryFileType(fileType);
  }
);

async function completeLandBoundarySection(gridreference, hectares) {

  await gridReferencePage.addGridReference(gridreference);
  await addHectaresPage.addHectares(hectares);
  
  // confirm on the cya page
  await (checkLandBoundaryDetailsPage.continueButton).click();

   //tasklist section shows as complete
   await expect(TaskList.landBoundaryStatus).toHaveText("Completed");  

}