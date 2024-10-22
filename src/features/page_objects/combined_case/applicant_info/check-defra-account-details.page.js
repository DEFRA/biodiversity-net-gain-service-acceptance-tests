const AgentActingForClientPage = require('../../applicant_info/agent-acting-for-client.page')

class CheckAccountDetailsPage extends Page {
  get titleText () {
    return 'Check your Defra account details are up to date'
  }

  get confirmAccountDetailsChkBox () {
    return $("input[value='true']")
  }

  get path () {
    return 'land/check-defra-account-details'
  }

  open () {
    return super.open(this.path)
  }
}
module.exports = new CheckAccountDetailsPage()
