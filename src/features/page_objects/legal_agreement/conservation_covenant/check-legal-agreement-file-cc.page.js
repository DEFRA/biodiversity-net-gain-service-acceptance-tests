// copydeck CD74
const Page = require('../../page')

class LegalAgreementCheckFileCC extends Page {
  get titleText () {
    return 'Check the conservation covenant file'
  }

  open () {
    return super.open('land/check-legal-agreement-file')
  }
}
module.exports = LegalAgreementCheckFileCC
