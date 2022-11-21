const Page = require("../page");

class LandBoundaryCheckGeospatialFile extends Page {
  get titleText() {
    return "Check the geospatial file";
  }

  get downloadLink() {
    return $("#document-download");
  }

  open() {
    return super.open("land/check-geospatial-file");
  }
}
module.exports = new LandBoundaryCheckGeospatialFile();