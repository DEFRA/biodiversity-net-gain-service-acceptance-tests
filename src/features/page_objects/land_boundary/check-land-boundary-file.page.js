const Page = require('../page')

class LandBoundaryCheckImageFile extends Page {
  get titleText () {
    return 'Check the land boundary file'
  }

  open () {
    return super.open('land/check-land-boundary-file')
  }
}
module.exports = LandBoundaryCheckImageFile
