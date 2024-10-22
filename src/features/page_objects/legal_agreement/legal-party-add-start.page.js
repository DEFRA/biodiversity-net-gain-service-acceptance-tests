const Page = require('../page')

class LegalPartyAddStartPage extends Page {
  get titleText () {
    return 'You need to add all landowners or leaseholders listed on the planning obligation (section 106 agreement)'
  }

  open () {
    return super.open('land/legal-party-add-start')
  }
}
module.exports = new LegalPartyAddStartPage()
