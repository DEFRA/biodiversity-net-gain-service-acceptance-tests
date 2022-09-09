const Page = require("../page");

class LandBoundaryUploadImageFile extends Page {
  open() {
    return super.open("/land/upload-land-boundary-file");
  }
}
module.exports = new LandBoundaryUploadImageFile();
