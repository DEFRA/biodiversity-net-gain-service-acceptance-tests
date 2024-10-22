// CD13 https://docs.google.com/document/d/1512UH8oObKC-6taSPuOhJ3ZEF25I8tBvu4FMeq-_grY/edit
const Page = require('../page')

class LandOwnershipCheckPage extends Page {
  get titleText () {
    return 'Check the proof of land ownership file'
  }

  get downloadLink () {
    return $('#document-download')
  }

  open () {
    return super.open('land/check-ownership-proof-file')
  }
}
module.exports = LandOwnershipCheckPage
