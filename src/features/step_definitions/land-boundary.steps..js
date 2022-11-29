const { When, Then } = require("@wdio/cucumber-framework");
const landboundaryFileChoices = require("../page_objects/land_boundary/choose-land-boundary-upload.page");
const gridReferencePage = require("../page_objects/land_boundary/grid-reference.page");
const addHectaresPage = require("../page_objects/land_boundary/add-hectares.page");

When("I add a valid grid reference {string}", async (gridReference) => {
  await (await gridReferencePage.getGridRef).clearValue();
  await gridReferencePage.getGridRef.addValue(gridReference);
  await (await gridReferencePage.continueButton).click();
  await expect(gridReferencePage.errorMsg).not.toBeDisplayed();
});

When("I add an invalid grid reference {string}", async (gridReference) => {
  await (await gridReferencePage.getGridRef).clearValue();
  await gridReferencePage.getGridRef.addValue(gridReference);
  await (await gridReferencePage.continueButton).click();
  await expect(gridReferencePage.errorMsg).toBeDisplayed();
});

When("I add total hectares as {string}", async (value) => {
  await (await addHectaresPage.getHectares).clearValue();
  await addHectaresPage.getHectares.addValue(value);
  await (await addHectaresPage.continueButton).click();
});

Then(/^I choose to upload (?:a|an) "(.*)" file$/, async (fileType) => {
    switch (fileType) {
      case "geospatial":
        await expect(landboundaryFileChoices.geospatialOption).toBeClickable;
        (await landboundaryFileChoices.geospatialOption).click();
        break;
      case "Document or Image":
        await expect(landboundaryFileChoices.imageOption).toBeClickable;
        await (await landboundaryFileChoices.imageOption).click();
        break;
    }

    await landboundaryFileChoices.continueButton.click();
  }
);


