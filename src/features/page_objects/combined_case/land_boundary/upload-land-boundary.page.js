const LandBoundaryUploadImageFile = require("../../land_boundary/upload-land-boundary.page");

class CombinedCaseLandBoundaryUploadImageFile extends LandBoundaryUploadImageFile {
 
  get path() {
    return "combined-case/upload-land-boundary";
  }

  open() {
    return super.open(this.path);
  }
}
module.exports = CombinedCaseLandBoundaryUploadImageFile;
