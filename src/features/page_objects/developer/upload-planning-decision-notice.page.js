const Page = require("../page");

class DeveloperUploadPlanningDecisionNoticePage extends Page {
  get titleText() {
    return "Upload the planning application decision notice for the development";
  }

  get path() {
    return "developer/upload-planning-decision-notice";
  }

  open() {
    return super.open(this.path);
  }
}
module.exports = new DeveloperUploadPlanningDecisionNoticePage();