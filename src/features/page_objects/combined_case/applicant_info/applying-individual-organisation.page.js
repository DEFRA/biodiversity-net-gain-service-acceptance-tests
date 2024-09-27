const AgentActingForClientPage = require("../../applicant_info/agent-acting-for-client.page")

class CheckIfApplyingAsIndividualOrOrgPage extends Page {
  get titleText() {
    return "Are you applying as an individual or as part of an organisation?";
  }

  get path() {
    return "land/applying-individual-organisation";
  }

  open() {
    return super.open(this.path);
  }
}
module.exports = new CheckIfApplyingAsIndividualOrOrgPage();