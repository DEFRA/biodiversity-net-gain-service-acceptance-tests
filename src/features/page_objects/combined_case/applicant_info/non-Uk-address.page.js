const AgentActingForClientPage = require("../../applicant_info/agent-acting-for-client.page")

class NonUkAddressPage extends Page {
  get titleText() {
    return "What is your address?";
  }

  get path() {
    return "land/non-UK-address";
  }

  open() {
    return super.open(this.path);
  }
}
module.exports = new NonUkAddressPage();