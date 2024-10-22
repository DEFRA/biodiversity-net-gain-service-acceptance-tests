const Page = require('../page')

class purchasingIndividualOrganisationPage extends Page {
  get titleText () {
    return 'Are you purchasing statutory biodiversity credits as an individual or an organisation?'
  }

  open () {
    return super.open('credits-purchase/purchasing-individual-organisation')
  }
}
module.exports = new purchasingIndividualOrganisationPage()
