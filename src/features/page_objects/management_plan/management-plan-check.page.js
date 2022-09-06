const Page = require("../page");

class ManagementPlanCheck extends Page {
  get titleText() {
    return "Check the habitat management and monitoring plan file";
  }

  get downloadLink() {
    return $("#management-plan-download");
  }

  open() {
    return super.open("land/check-management-plan");
  }
}
module.exports = new ManagementPlanCheck();
