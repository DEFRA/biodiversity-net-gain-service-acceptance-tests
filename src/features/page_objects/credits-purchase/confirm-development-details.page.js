const Page = require('../page')

class confirmDevelopmentDetailsPage extends Page {
  get titleText () {
    return 'Confirm the development details'
  }

  open () {
    return super.open('credits-purchase/confirm-development-details')
  }
}
module.exports = new confirmDevelopmentDetailsPage()
