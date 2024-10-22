// CD08
const MetricUpload = require('../../metric/metric-upload.page')

class CombinedCaseMetricUpload extends MetricUpload {
  get path () {
    return 'combined-case/upload-metric'
  }

  open () {
    return super.open(this.path)
  }
}
module.exports = CombinedCaseMetricUpload
