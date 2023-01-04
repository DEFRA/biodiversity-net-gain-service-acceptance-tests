const { Given, When, Then } = require("@wdio/cucumber-framework");
const landboundaryFileChoices = require("../page_objects/land_boundary/choose-land-boundary-upload.page");
const gridReferencePage = require("../page_objects/land_boundary/grid-reference.page");
const addHectaresPage = require("../page_objects/land_boundary/add-hectares.page");
const checkLandBoundaryDetailsPage = require("../page_objects/land_boundary/check-land-boundary-details.page");

Given("I have completed the land-boundary section", async () => {
  await completeLandBoundarySection("fileType", "TL6233", "1231.11");
})

async function completeLandBoundarySection(fileType, gridreference, hectares) {
  // And I choose and upload a "land-boundary" file
  //       And I confirm it is the correct file
  //       And I add a valid grid reference "<grid reference>"
  //       And I add total hectares as "<hectares>"
  //       And I confirm the check "land boundary" details are correct
  await gridReferencePage.addGridReference(gridreference);
  await addHectaresPage.addHectares(hectares);
  
  // confirm on the cya page
  await (checkLandBoundaryDetailsPage.continueButton).click();
  
}

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