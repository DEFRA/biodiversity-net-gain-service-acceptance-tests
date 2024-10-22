// Copydeck CD126 https://docs.google.com/document/d/1QSvGVQKImREeHjQhByadKmgT8v3WCjZ_/edit#heading=h.gjdgxs
const Page = require('../page')

class ClientsUkAddressPage extends Page {
  get titleText () {
    return 'What is your address?'
  }

  get path () {
    return 'land/UK-address'
  }

  open () {
    return super.open(this.path)
  }
}
module.exports = new ClientsUkAddressPage()
