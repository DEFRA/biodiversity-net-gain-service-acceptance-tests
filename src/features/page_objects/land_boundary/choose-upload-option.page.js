const Page = require("../page");

class LandBoundaryChooseUploadOption extends Page {
  get Title() {
    return "How do you want to provide the land boundary for the off-site?";
  }
  open() {
    return super.open("/land/location-options");
    // return super.open("land/choose-land-boundary-upload-option");
  }
}
module.exports = new LandBoundaryChooseUploadOption();
