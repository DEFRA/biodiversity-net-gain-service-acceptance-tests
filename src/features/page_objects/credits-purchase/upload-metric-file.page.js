const Page = require('../page')

class CreditsMetricUploadPage extends Page {
  get titleText () {
    return 'Upload the statutory biodiversity metric'
  }

  get path () {
    return 'credits-purchase/upload-metric-file'
  }

  open () {
    return super.open(this.path)
  } 
}
module.exports = CreditsMetricUploadPage
