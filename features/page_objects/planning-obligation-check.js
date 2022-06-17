const Page = require("./base-page");

class PlanningObligationCheck extends Page {
  get Title() {
    return "Check your planning obligation file";
  }

  open() {
    return super.open("/development/check-planning-obligation");
  }
}
module.exports = new PlanningObligationCheck();
