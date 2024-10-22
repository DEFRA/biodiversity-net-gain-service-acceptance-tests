// Copydeck CD122 https://docs.google.com/document/d/1kcV9rxA6-fusAATkSr9tNE5OaHhGP1oq/edit
const Page = require('../page')

class IsClientIndividualorOrgPage extends Page {
  get titleText () {
    return 'Is your client an individual or organisation?'
  }

  get path () {
    return 'land/client-individual-organisation'
  }

  open () {
    return super.open(this.path)
  }
}
module.exports = IsClientIndividualorOrgPage
