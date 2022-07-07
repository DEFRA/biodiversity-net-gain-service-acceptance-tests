const Page = require("../page");

class LandBoundaryUploadGeospatial extends Page {
  open() {
    return super.open("land/upload-geospatial-file");
  }
}
module.exports = new LandBoundaryUploadGeospatial();
