const Page = require('../page')

class creditsPurchaseCheckDefraAccountsPage extends Page {
  get titleText () {
    return 'Check your Defra account details are up to date'
  }

  get confirmDefraAccountDetailsChkBox () {
    return $('#defraAccountDetailsConfirmed')
  }

  get path () {
    return 'credits-purchase/check-defra-account-details'
  }

  open () {
    return super.open(this.path)
  }
}
module.exports = new creditsPurchaseCheckDefraAccountsPage()
