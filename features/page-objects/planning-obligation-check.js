const Page = require("./base-page");

class PlanningObligationCheck extends Page {
  get getHeading() {
    return $("#landowner-permission-correct-2");
  }

  open() {
    return super.open("legal-agreement-planning-obligation-check");
  }
}
module.exports = new PlanningObligationCheck();
