const Page = require("../page");

class LandBoundaryUploadGeospatialFile extends Page {
  get titleText() {
    return "Upload a geospatial file showing the land boundary";
  }

  get path() {
    return "land/upload-geospatial-file";
  }

  open() {
    return super.open(this.path);
  }
}
module.exports = new LandBoundaryUploadGeospatialFile();
