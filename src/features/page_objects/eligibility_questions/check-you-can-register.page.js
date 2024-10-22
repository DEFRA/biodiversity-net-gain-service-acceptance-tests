const Page = require('../page')

class CheckYouCanRegisterPage extends Page {
  get titleText () {
    return 'Check you have everything to Register a biodiversity gain site'
  }

  get skipQuestions () {
    return $("a[href='/land/name']")
  }

  get startQuestions () {
    return $("a[href='/land/site-in-england']")
  }

  open () {
    return super.open('land/check-you-can-register')
  }
}
module.exports = CheckYouCanRegisterPage
