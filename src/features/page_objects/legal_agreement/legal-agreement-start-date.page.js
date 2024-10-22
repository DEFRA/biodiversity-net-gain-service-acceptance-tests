const Page = require('../page')

class LegalAgreementStartDate extends Page {
  get titleText () {
    return 'What is the start date of the planning obligation (section 106 agreement)?'
  }

  open () {
    return super.open('land/legal-agreement-start-date')
  }
}
module.exports = LegalAgreementStartDate
