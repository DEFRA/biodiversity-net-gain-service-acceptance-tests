const Page = require('../page')

class nationalityPage extends Page {
  get titleText () {
    return 'What is your nationality?'
  }

  get nationality1 () {
    return $('#nationality1')
  }

  open () {
    return super.open('credits-purchase/nationality')
  }
}
module.exports = new nationalityPage()
