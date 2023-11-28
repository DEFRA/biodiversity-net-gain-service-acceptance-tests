// Copydeck CD120 https://docs.google.com/document/d/18GZKdH6crGPDyGHhvJTT1vrG9WHWTcDy/edit#heading=h.gjdgxs
const Page = require("../page");

class AgentActingForClientPage extends Page {
  get titleText() {
    return "Are you an agent acting on behalf of a client?";
  }

  get path() {
    return "land/applicant-details-is-agent";
    // agent-acting-for-client";
  }

  open() {
    return super.open(this.path);
  }
}
module.exports = new AgentActingForClientPage();