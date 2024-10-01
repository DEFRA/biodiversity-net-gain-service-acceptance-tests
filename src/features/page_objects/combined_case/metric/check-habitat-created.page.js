// CD56
const MetricCheckHabitatCreationPage = require('../../metric/check-habitat-created.page')

class CombinedCaseMetricCheckHabitatCreationPage extends MetricCheckHabitatCreationPage {
  open () {
    return super.open('combined-case/check-habitat-created')
  }
}
module.exports = CombinedCaseMetricCheckHabitatCreationPage
