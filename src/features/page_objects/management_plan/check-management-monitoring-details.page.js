const Page = require("../page");

class ManagementMonitoringPlanCheckDetails extends Page {
  get titleText() {
    return "Check the habitat management and monitoring details";
  }

  open() {
    return super.open("land/check-management-monitoring-details");
  }
}
module.exports = new ManagementMonitoringPlanCheckDetails();