const LandBoundaryChooseUploadOption = require('../../land_boundary/choose-land-boundary-upload.page')

class CombinedCaseLandBoundaryChooseUploadOption extends LandBoundaryChooseUploadOption {
  get path () {
    return 'combined-case/choose-land-boundary-upload'
  }

  open () {
    return super.open(this.path)
  }
}
module.exports = CombinedCaseLandBoundaryChooseUploadOption
