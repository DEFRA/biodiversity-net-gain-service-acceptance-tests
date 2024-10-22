const AgentActingForClientPage = require('../../applicant_info/agent-acting-for-client.page')

class ClientsEmailPage extends Page {
  get titleText () {
    return "What is your client's email address?"
  }

  open () {
    return super.open('land/clients-email-address')
  }
}
module.exports = new ClientsEmailPage()
