const Page = require('../page')

class DeveloperUploadPlanningDecisionNoticePage extends Page {
  get titleText () {
    return 'Check the planning decision notice file'
  }

  get path () {
    return 'developer/check-planning-decision-notice-file'
  }

  open () {
    return super.open(this.path)
  }
}
module.exports = DeveloperUploadPlanningDecisionNoticePage
