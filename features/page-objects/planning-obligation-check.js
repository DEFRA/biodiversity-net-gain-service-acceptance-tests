const Page = require("./base-page");

class PlanningObligationCheck extends Page {
  open() {
    return super.open("legal-agreement-planning-obligation-check");
  }
}
module.exports = new PlanningObligationCheck();
