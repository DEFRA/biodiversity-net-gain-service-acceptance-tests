const Page = require("./base-page");

class PlanningObligationCheck extends Page {
  open() {
    return super.open("/land/location-options");
    // return super.open("land/choose-land-boundary-upload-option");
  }
}
module.exports = new PlanningObligationCheck();
