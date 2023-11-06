const Page = require('../page')

class MetricCheckDetails extends Page {
  get titleText () {
    return 'Check Biodiversity Metric 4.1 and habitat declaration'
  }

  open () {
    return super.open('land/check-habitat-baseline')
  }
}
module.exports = new MetricCheckDetails()
