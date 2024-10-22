const LandOwnershipUploadPage = require('../../land_ownership/land-ownership-upload.page')

class CombinedCaseLandOwnershipUploadPage extends LandOwnershipUploadPage {
  get path () {
    return 'combined-case/upload-ownership-proof'
  }

  open () {
    return super.open(this.path)
  }
}
module.exports = CombinedCaseLandOwnershipUploadPage
