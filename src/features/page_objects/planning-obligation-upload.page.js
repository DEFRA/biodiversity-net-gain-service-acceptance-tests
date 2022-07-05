const Page = require("./page");

class PlanningObligationUpload extends Page {
  get Title() {
    return "Upload your planning obligation";
  }

  open() {
    return super.open("/development/upload-planning-obligation");
  }
}
module.exports = new PlanningObligationUpload();
