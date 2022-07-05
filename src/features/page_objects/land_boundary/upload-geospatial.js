const Page = require("../base-page");

class LandBoundaryUploadGeospatial extends Page {
  open() {
    return super.open("/land/location-import");
    // return super.open("land/upload-geospatial-file");
  }
}
module.exports = new LandBoundaryUploadGeospatial();
