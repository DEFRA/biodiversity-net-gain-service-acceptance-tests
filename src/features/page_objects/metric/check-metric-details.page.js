// CD57
const Page = require('../page')

class MetricCheckDetails extends Page {
  get titleText () {
    return 'Check stautory biodiversity metric details'
  }

  open () {
    return super.open('land/check-metric-details')
  }
}
module.exports = MetricCheckDetails
