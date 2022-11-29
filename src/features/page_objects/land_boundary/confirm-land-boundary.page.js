const Page = require("../page");

class LandBoundaryConfirm extends Page {
  get Title() {
    return "Confirm the land boundary";
  }

  open() {
    return super.open("/land/confirm-land-boundary");
  }
}
module.exports = new LandBoundaryConfirm();
