const Page = require('../../page')

class DeveloperIsClientIndividualorOrgPage extends Page {
  get titleText () {
    return 'Are you applying as an individual or as part of an organisation?'
  }

  get path () {
    return 'developer/client-individual-organisation'
  }

  open () {
    return super.open(this.path)
  }
}
module.exports = new DeveloperIsClientIndividualorOrgPage()
