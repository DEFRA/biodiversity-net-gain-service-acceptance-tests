const Page = require("../base-page");

class LandBoundaryChooseUploadOption extends Page {
  get Title() {
    //return "How do you want to provide the land boundary for the off-site?";
    return "Register land for off-site biodiversity gain - GOV.UK";
  }

  get geospatialOption() {
    return $("#landBoundaryUploadType");
  }

  get imageOption() {
    return $("#landBoundaryUploadType-2");
  }

  get geospatialOptionLbl() {
    return $("#landBoundaryUploadType+ .govuk-radios__label");
  }

  get imageOptionLbl() {
    return $("#landBoundaryUploadType-2+ .govuk-radios__label");
  }

  async selectUploadTypeGeospatial() {
    await $("#landBoundaryUploadType").click();

    //this.geospatialOption.click();
  }

  async selectUploadTypeImage() {
    await this.imageOption.click();
  }

  open() {
    //return super.open("/land/location-options");
    return super.open("land/choose-land-boundary-upload-option");
  }
}
module.exports = new LandBoundaryChooseUploadOption();
