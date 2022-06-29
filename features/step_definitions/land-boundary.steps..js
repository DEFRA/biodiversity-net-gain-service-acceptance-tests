const { Given, When, Then } = require("@wdio/cucumber-framework");
const uploads = require("../page_objects/land_boundary/choose-upload-option");

Then(
  /^I should be able to choose (?:a|an) "(.*)" option$/,
  async (fileType) => {
    switch (fileType) {
      case "geospatial":
        //await expect(uploads.geospatialOptionLbl).toContain(fileType);
        uploads.selectUploadTypeGeospatial();
        //(await uploads.geospatialOption).click();
        break;
      case "Document or Image":
        //await expect(uploads.imageOptionLbl).toContain(fileType);
        uploads.selectUploadTypeImage();
        break;
      // default:
      //   console.log("Invalid option " + fileType);
    }
  }
);
