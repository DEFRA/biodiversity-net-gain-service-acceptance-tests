const Page = require("../page");

class LandBoundaryChooseUploadOption extends Page {
  get Title() {
    return "Choose how to add the land boundary details for the biodiversity gain site";
  }

  get geospatialOption() {
    // location-options
    return $("#landBoundaryUploadType");
  }

  get imageOption() {

    // location-options-2
    return $("#landBoundaryUploadType-2");
  }

  get geospatialOptionLbl() {
    return $("#landBoundaryUploadType+ .govuk-radios__label");
  }

  get imageOptionLbl() {
    return $("#landBoundaryUploadType-2+ .govuk-radios__label");
  }

  async selectUploadTypeGeospatial() {
    await this.geospatialOption.click();
  }

  async selectUploadTypeImage() {
    await this.imageOption.click();
  }

  open() {
    return super.open("land/choose-land-boundary-upload");
  }
}
module.exports = new LandBoundaryChooseUploadOption();
