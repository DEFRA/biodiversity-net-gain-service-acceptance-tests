const AgentActingForClientPage = require('../../applicant_info/agent-acting-for-client.page')

class IsClientIndividualorOrgPage extends Page {
  get titleText () {
    return 'Is your client an individual or organisation?'
  }

  get path () {
    return 'land/client-individual-organisation'
  }

  open () {
    return super.open(this.path)
  }
}
module.exports = new IsClientIndividualorOrgPage()
