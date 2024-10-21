// copydeck CD113 https://docs.google.com/document/d/1Xq64VZ4nc404thMyWNm_26vhxMiuYMY4/edit
const Page = require('../page')

class LegalAgreementRemoveFilePage extends Page {
  get titleText () {
    return 'Are you sure you want to remove [file] as a legal agreement file?'
  }

  open () {
    return super.open('land/remove-legal-agreement-file')
  }
}
module.exports = LegalAgreementRemoveFilePage
