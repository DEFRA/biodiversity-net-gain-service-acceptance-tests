const Page = require('../page')

class dateOfBirthPage extends Page {
  get titleText () {
    return 'What is your date of birth?'
  }

  get DOBDay () {
    return $("[id$='dob-day']")
  }

  get DOBMonth () {
    return $("[id$='dob-month']")
  }

  get DOBYear () {
    return $("[id$='dob-year']")
  }

  open () {
    return super.open('credits-purchase/date-of-birth')
  }
}
module.exports = new dateOfBirthPage()
