const Page = require('../page')

class CreditsPurchaseApplicationListPage extends Page {
  get titleText () {
    return 'Statutory biodiversity credits'
  }

  get buyStatutoryCreditsLink () {
    return $('#create-credits-purchase')
  }

  open () {
    return super.open('credits-purchase/check-statutory-biodiversity-credits')
  }
}
module.exports = CreditsPurchaseApplicationListPage
