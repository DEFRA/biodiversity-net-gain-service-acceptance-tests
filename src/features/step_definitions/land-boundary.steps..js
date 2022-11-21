const { When, Then } = require("@wdio/cucumber-framework");
const uploads = require("../page_objects/land_boundary/choose-upload-option.page");
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

Then(/^I should be able to choose (?:a|an) "(.*)" option$/, async (fileType) => {
    switch (fileType) {
      case "geospatial":
        await expect(uploads.geospatialOption).toBeClickable;
        break;
      case "Document or Image":
        await expect(uploads.imageOption).toBeClickable;
        break;
    }
  }
);


