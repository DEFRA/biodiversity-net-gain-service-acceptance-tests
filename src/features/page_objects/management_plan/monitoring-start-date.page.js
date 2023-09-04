const Page = require("../page");

class MonitoringStartDate extends Page {
  get titleText() {
    return "When will the 30-year management and monitoring period start?";
  }

  open() {
    return super.open("land/management-monitoring-start-date");
  }
}
module.exports = new MonitoringStartDate();
