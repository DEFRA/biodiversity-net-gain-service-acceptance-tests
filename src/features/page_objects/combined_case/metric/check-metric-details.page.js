// CD57
const MetricCheckDetailsPage = require('../../metric/check-metric-details.page')

class CombinedCaseMetricCheckDetailsPage extends MetricCheckDetailsPage {
  open () {
    return super.open('combined-case/check-metric-details')
  }
}
module.exports = CombinedCaseMetricCheckDetailsPage
