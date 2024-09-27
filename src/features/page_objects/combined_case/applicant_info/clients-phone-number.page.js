const AgentActingForClientPage = require("../../applicant_info/agent-acting-for-client.page")

class ClientsPhoneNumberPage extends Page {
  get titleText() {
    return "What is your client's phone number?";
  }

  get path() {
    return "land/clients-phone-number";
  }

  open() {
    return super.open(this.path);
  }
}
module.exports = new ClientsPhoneNumberPage();