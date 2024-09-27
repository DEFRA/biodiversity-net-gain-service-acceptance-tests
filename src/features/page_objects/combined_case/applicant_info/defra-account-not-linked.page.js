const AgentActingForClientPage = require("../../applicant_info/agent-acting-for-client.page")

class DefraAccountNotlinkedPage extends Page {
  get titleText() {
    return "Your Defra account must be linked to the landowner or leaseholder’s organisation";
  }

  get path() {
    return "land/Defra-account-not-linked";
  }

  open() {
    return super.open(this.path);
  }
}
module.exports = new DefraAccountNotlinkedPage();