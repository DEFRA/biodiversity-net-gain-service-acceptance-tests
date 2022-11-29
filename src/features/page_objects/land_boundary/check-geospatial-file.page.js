const Page = require("../page");

class LandBoundaryCheckGeospatialFile extends Page {
  get titleText() {
    return "Check the geospatial file";
  }

  get downloadLink() {
    return $("#document-download");
  }

  get path() {
    return "land/check-geospatial-file";
  }

  open() {
    return super.open(this.path);
  }
}
module.exports = new LandBoundaryCheckGeospatialFile();