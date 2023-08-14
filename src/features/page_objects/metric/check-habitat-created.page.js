const Page = require('../page')

class MetricCheckHabitatCreation extends Page {
  get titleText () {
    return 'Check the created and enhanced habitat information'
  }

  open () {
    return super.open('land/check-habitat-created')
  }
}
module.exports = new MetricCheckHabitatCreation()
