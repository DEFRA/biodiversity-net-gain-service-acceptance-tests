const CheckApplicantInfoPage = require('../../applicant_info/check-applicant-information.page')

class CombinedCaseCheckApplicantInfoPage extends CheckApplicantInfoPage {
  get path () {
    return 'combined-case/check-applicant-information'
  }

  open () {
    return super.open(this.path)
  }
}
module.exports = CombinedCaseCheckApplicantInfoPage
