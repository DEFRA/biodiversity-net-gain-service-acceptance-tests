// copydeck CD97 https://docs.google.com/document/d/1fp8ZOVMJEOBeLHb8Tk_VhfP54iBx7gVt/edit#heading=h.gjdgxs
const Page = require('../page')

class LegalAgreementCheckLandownersPage extends Page {
  get titleText () {
    return 'You have added 1 landowner or leaseholder'
  }

  open () {
    return super.open('land/check-landowners')
  }
}
module.exports = LegalAgreementCheckLandownersPage
