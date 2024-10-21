// Copydeck CD127 https://docs.google.com/document/d/1GmunQ2K14esuEtuD4QfyBEANro3uUK4-/edit
const Page = require('../page')

class NonUkAddressPage extends Page {
  get titleText () {
    return 'What is your address?'
  }

  get path () {
    return 'land/non-UK-address'
  }

  open () {
    return super.open(this.path)
  }
}
module.exports = new NonUkAddressPage()
