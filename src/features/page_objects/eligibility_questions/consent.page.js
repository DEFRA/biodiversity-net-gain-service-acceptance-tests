const Page = require('../page')

class ConsentPage extends Page {
  get titleText () {
    return 'Do you have consent to register the biodiversity gain site?'
  }

  open () {
    return super.open('land/consent')
  }
}
module.exports = new ConsentPage()
