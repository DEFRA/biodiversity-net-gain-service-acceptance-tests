const ApplicantDetailsIsAgentPage = require('../../applicant_info/applicant-details-is-agent.page')

class CombinedCaseApplicantDetailsIsAgentPage extends ApplicantDetailsIsAgentPage {
  get path () {
    return 'combined-case/applicant-details-is-agent'
  }

  open () {
    return super.open(this.path)
  }
}
module.exports = new CombinedCaseApplicantDetailsIsAgentPage()
