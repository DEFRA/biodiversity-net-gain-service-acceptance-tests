const LandBoundaryConfirm = require("../../land_boundary/confirm-land-boundary.page");

class CombinedCaseLandBoundaryConfirm extends LandBoundaryConfirm {

  open() {
    return super.open("combined-case/confirm-land-boundary");
  }
}
module.exports = new CombinedCaseLandBoundaryConfirm();
