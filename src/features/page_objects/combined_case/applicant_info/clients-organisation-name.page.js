const AgentActingForClientPage = require("../../applicant_info/agent-acting-for-client.page")

class ClientsOrgNamePage extends Page {
  get titleText() {
    return "What is your client’s organisation name?";
  }

  get path() {
    return "land/clients-organisation-name";
  }

  open() {
    return super.open(this.path);
  }
}
module.exports = new ClientsOrgNamePage();