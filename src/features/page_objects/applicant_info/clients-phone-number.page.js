// Copydeck CD129 https://docs.google.com/document/d/1fBBw-CfbiVA3DO6-EJPn2Y7VfhAItStK/edit
const Page = require('../page')

class ClientsPhoneNumberPage extends Page {
  get titleText () {
    return "What is your client's phone number?"
  }

  get path () {
    return 'land/clients-phone-number'
  }

  open () {
    return super.open(this.path)
  }
}
module.exports = ClientsPhoneNumberPage
