const Page = require("./page");

class PlanningObligationCheck extends Page {
  get Title() {
    return "Check your file";
  }

  open() {
    return super.open("/development/check-planning-obligation");
  }
}
module.exports = new PlanningObligationCheck();
