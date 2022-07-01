const { Given, When, Then } = require("@wdio/cucumber-framework");
const uploads = require("../page_objects/land_boundary/choose-upload-option.page");

Then(
  /^I should be able to choose (?:a|an) "(.*)" option$/,
  async (fileType) => {
    switch (fileType) {
      case "geospatial":
        (await uploads.geospatialOption).click();
        break;
      case "Document or Image":
        (await uploads.ImageOption).click();
        break;
    }
  }
);
