const Page = require("../../page");

class DeveloperAgentActingForClientPage extends Page {
  get titleText() {
    return "Are you an agent acting on behalf of a client?";
  }

  get path() {
    return "developer/applicant-details-is-agent";
  }

  open() {
    return super.open(this.path);
  }
}
module.exports = new DeveloperAgentActingForClientPage();