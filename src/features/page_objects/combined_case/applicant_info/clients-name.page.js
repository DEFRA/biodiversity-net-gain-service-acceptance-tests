const AgentActingForClientPage = require("../../applicant_info/agent-acting-for-client.page")

class ClientsNamePage extends Page {
  get titleText() {
    return "What is your client's name?";
  }

  get path() {
    return "land/clients-name";
  }

  open() {
    return super.open(this.path);
  }
}
module.exports = new ClientsNamePage();