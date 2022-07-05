const Page = require("../page");

class LandBoundaryUploadImageFile extends Page {
  open() {
    return super.open("/land/upload-land-boundary-file");
    // return super.open("land/upload-image-file");
  }
}
module.exports = new LandBoundaryUploadImageFile();
