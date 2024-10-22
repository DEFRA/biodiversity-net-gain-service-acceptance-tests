// copy deck CD141 https://docs.google.com/document/d/1pRYDUmuKTm8LozXZlYHEuSrcXAxnCYJ_/edit
const Page = require('../page')

class LegalAgreementEndDatePage extends Page {
  get titleText () {
    return 'Does the requirement to create and maintain habitat enhancements have an end date?'
  }

  open () {
    return super.open('land/habitat-enhancements-end-date')
  }
}
module.exports = LegalAgreementEndDatePage
