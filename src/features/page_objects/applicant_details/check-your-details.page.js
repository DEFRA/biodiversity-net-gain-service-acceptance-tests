const Page = require('../page')

class CheckYourDetails extends Page {
  get titleText () {
    return 'Check your details'
  }

  get fullnameValue () {
    return $('#fullname-value')
  }

  get roleValue () {
    return $('#role-value')
  }

  get emailValue () {
    return $('#email-value')
  }

  get changeFullname () {
    return $('#fullname')
  }

  get changeRole () {
    return $('#role')
  }

  get changeEmail () {
    return $('#email')
  }

  open () {
    return super.open('land/check-your-details')
  }
}
module.exports = CheckYourDetails
