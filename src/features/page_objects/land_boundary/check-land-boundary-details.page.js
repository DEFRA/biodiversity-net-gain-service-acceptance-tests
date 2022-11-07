const Page = require("../page");

class LandBoundaryCheckDetails extends Page {
  get titleText() {
    return "Check the land boundary details";
  }

  open() {
    return super.open("land/check-land-boundary-details");
  }
}
module.exports = new LandBoundaryCheckDetails();
