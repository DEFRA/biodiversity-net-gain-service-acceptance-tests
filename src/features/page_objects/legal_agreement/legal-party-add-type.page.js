const Page = require('../page')

class LegalPartyAddTypePage extends Page {
  get titleText () {
    return 'Is the landowner or leaseholder listed on the planning obligation (section 106 agreement) an individual or organisation?'
  }

  get radioIndividual () {
    return $('#individual')
  }

  get radioOrganisation () {
    return $('#organisation')
  }

  open () {
    return super.open('land/legal-party-add-type')
  }
}
module.exports = LegalPartyAddTypePage
