const Page = require("../page");

class LandBoundaryUploadGeospatial extends Page {
  get Title() {
    return "Register land for off-site biodiversity gain - GOV.UK";
  }

  open() {
    return super.open("land/upload-geospatial-file");
  }
}
module.exports = new LandBoundaryUploadGeospatial();
