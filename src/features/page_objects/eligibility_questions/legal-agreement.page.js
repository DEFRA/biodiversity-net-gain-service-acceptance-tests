const Page = require('../page')

class LegalAgreementPage extends Page {
  get titleText () {
    return 'Do you have a legal agreement securing your biodiversity gain site?'
  }

  open () {
    return super.open('land/legal-agreement')
  }
}
module.exports = new LegalAgreementPage()
