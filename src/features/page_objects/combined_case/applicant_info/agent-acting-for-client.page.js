const AgentActingForClientPage = require("../../applicant_info/agent-acting-for-client.page")

class CombinedCaseAgentActingForClientPage extends AgentActingForClientPage {

  get path() {
    return "combined-case/applicant-details-is-agent";
  }

  open() {
    return super.open(this.path);
  }
}
module.exports = CombinedCaseAgentActingForClientPage;