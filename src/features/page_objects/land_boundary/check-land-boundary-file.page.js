const Page = require('../page')

class LandBoundaryCheckImageFile extends Page {
  get titleText () {
    return 'Check the land boundary file'
  }

  get downloadLink () {
    return $('#document-download')
  }

  open () {
    return super.open('land/check-land-boundary-file')
  }
}
module.exports = LandBoundaryCheckImageFile
