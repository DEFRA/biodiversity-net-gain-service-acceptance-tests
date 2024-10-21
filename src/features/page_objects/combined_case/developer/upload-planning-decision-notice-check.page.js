const DeveloperUploadPlanningDecisionNoticePage = require('../../developer/upload-planning-decision-notice-check.page')

class CombinedCaseCheckPlanningDecisionNoticePage extends DeveloperUploadPlanningDecisionNoticePage {
  get path () {
    return 'combined-case/check-planning-decision-notice-file'
  }

  open () {
    return super.open(this.path)
  }
}
module.exports = CombinedCaseCheckPlanningDecisionNoticePage
