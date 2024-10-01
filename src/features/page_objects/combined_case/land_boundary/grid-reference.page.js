const LandBoundaryGridReference = require("../../land_boundary/grid-reference.page");

class CombinedCaseLandBoundaryGridReference extends LandBoundaryGridReference {

  open() {
    return super.open("combined-case/add-grid-reference");
  }
}
module.exports = CombinedCaseLandBoundaryGridReference;
