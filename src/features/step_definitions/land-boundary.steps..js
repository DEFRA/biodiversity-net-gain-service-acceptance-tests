const { Then } = require("@wdio/cucumber-framework");
const uploads = require("../page_objects/land_boundary/choose-upload-option.page");

Then(
  /^I should be able to choose (?:a|an) "(.*)" option$/,
  async (fileType) => {
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
