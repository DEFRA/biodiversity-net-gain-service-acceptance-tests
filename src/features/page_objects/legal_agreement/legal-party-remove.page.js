const Page = require('../page')

class LegalPartyRemovePage extends Page {
  get titleText () {
    return 'Are you sure you want to remove [name] as a legal party?'
  }

  open () {
    return super.open('land/legal-party-remove')
  }
}
module.exports = new LegalPartyRemovePage()
