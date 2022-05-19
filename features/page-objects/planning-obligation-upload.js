const Page = require("./base-page");

class PlanningObligationUpload extends Page {
  open() {
    return super.open("legal-agreement-planning-obligation-upload");
  }
}
module.exports = new PlanningObligationUpload();
