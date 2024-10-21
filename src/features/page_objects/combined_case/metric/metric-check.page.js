// CD09
const MetricCheckPage = require('../../metric/metric-check.page')

class CombinedCaseMetricCheckPage extends MetricCheckPage {
  open () {
    return super.open('combined-case/check-metric-file')
  }
}
module.exports = CombinedCaseMetricCheckPage
