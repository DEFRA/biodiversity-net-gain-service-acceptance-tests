const Page = require('../../page')

class DeveloperIsClientAddressUkPage extends Page {
  get titleText () {
    return "Is your client's address in the UK?"
  }

  get path () {
    return 'developer/is-address-UK'
  }

  open () {
    return super.open(this.path)
  }
}
module.exports = new DeveloperIsClientAddressUkPage()
