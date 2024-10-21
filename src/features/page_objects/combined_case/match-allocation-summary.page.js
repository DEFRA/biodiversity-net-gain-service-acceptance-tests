const Page = require('../page')

class CombinedCaseMatchAllocationSummaryPage extends Page {
  get titleText () {
    return 'Confirm your matched habitats'
  }

  open () {
    return super.open('combined-case/match-allocation-summary')
  }
}
module.exports = CombinedCaseMatchAllocationSummaryPage
