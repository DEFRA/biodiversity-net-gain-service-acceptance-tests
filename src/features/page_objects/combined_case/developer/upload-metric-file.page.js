const Page = require('../../page')

class CombinedCaseDeveloperMetricUploadPage extends Page {
  get titleText () {
    return 'Upload the allocation metric calculations for the biodiversity gain site'
  }

  get path () {
    return 'combined-case/upload-allocation-metric'
  }

  open () {
    return super.open(this.path)
  }
}
module.exports = CombinedCaseDeveloperMetricUploadPage
