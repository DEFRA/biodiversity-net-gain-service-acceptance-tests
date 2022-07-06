const Page = require("./page");

class PlanningObligationCheck extends Page {
  get Title() {
    return "Check your planning obligation file";
  }

  get downloadLink() {
    return $("#planning-obligation-download");
  }

  open() {
    return super.open("/development/check-planning-obligation");
  }
}
module.exports = new PlanningObligationCheck();
