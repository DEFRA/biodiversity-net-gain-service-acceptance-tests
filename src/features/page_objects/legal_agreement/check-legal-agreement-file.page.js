// copydeck CD74
const Page = require('../page')

class LegalAgreementCheckFile extends Page {
  get titleText () {
    return 'Check the planning obligation (section 106 agreement) file'
  }

  open () {
    return super.open('land/check-legal-agreement-file')
  }
}
module.exports = new LegalAgreementCheckFile()
