const AgentActingForClientPage = require("../../applicant_info/agent-acting-for-client.page")

class IsAddressUkPage extends Page {
  get titleText() {
    return "Is your address in the UK?";
  }

  get path() {
    return "land/is-address-UK";
  }

  open() {
    return super.open(this.path);
  }
}
module.exports = new IsAddressUkPage();



