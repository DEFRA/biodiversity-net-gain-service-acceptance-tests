const Page = require("../page");

class LandBoundaryUploadGeospatialFile extends Page {
  get Title() {
    return "Upload a geospatial file showing the land boundary";
  }

  open() {
    return super.open("land/upload-geospatial-file");
  }
}
module.exports = new LandBoundaryUploadGeospatialFile();
