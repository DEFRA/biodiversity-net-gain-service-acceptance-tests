const LandBoundaryCheckImageFile = require("../../land_boundary/check-land-boundary-file.page");

class CombinedCaseLandBoundaryCheckImageFile extends LandBoundaryCheckImageFile {
  open() {
    return super.open("combined-case/check-land-boundary-file");
  }
}
module.exports = CombinedCaseLandBoundaryCheckImageFile;
