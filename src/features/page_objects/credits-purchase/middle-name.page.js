const Page = require('../page')

class middleNamePage extends Page {
  get titleText () {
    return 'Do you have a middle name?'
  }

  get middleName () {
    return $('#middle-name')
  }

  open () {
    return super.open('credits-purchase/middle-name')
  }
}
module.exports = new middleNamePage()
