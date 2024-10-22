const CheckWrittenAuthorisationPage = require('../../applicant_info/agent-acting-for-client.page')

class CombinedCaseCheckWrittenAuthorisationPage extends CheckWrittenAuthorisationPage {
  get path () {
    return 'combined-case/check-written-authorisation-file'
  }

  open () {
    return super.open(this.path)
  }
}
module.exports = CombinedCaseCheckWrittenAuthorisationPage
