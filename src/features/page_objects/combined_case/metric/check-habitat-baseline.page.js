// CD55
const MetricDisplayBaselinePage = require('../../metric/check-habitat-baseline.page')

class CombinedCaseMetricDisplayBaselinePage extends MetricDisplayBaselinePage {
  open () {
    return super.open('combined-case/check-habitat-baseline')
  }
}
module.exports = CombinedCaseMetricDisplayBaselinePage
