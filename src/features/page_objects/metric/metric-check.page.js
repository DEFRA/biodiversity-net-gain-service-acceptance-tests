// CD09
const Page = require('../page')

class MetricCheck extends Page {
  get titleText () {
    return 'Check the statutory biodiversity metric file'
  }

  get downloadLink () {
    return $('#document-download')
  }

  open () {
    return super.open('land/check-metric-file')
  }
}
module.exports = MetricCheck
