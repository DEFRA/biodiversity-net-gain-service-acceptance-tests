const Page = require('../page')

class creditsPurchaseCheckAndSubmitPage extends Page {
  get titleText () {
    return 'Check your answers before sending your application'
  }

  get path () {
    return 'credits-purchase/check-and-submit'
  }

  open () {
    return super.open(this.path)
  }
}
module.exports = creditsPurchaseCheckAndSubmitPage
