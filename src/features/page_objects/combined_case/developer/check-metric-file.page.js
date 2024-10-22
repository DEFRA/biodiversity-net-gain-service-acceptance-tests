const Page = require('../../page')

class CombinedCaseDeveloperCheckMetricUploadPage extends Page {
  get titleText () {
    return 'Check the allocation metric'
  }

  get path () {
    return 'combined-case/check-metric-file'
  }

  open () {
    return super.open(this.path)
  }
}
module.exports = CombinedCaseDeveloperCheckMetricUploadPage
