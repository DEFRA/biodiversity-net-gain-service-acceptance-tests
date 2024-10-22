const DeveloperUploadPlanningDecisionNoticePage = require('../../developer/upload-planning-decision-notice.page')

class CombinedCaseUploadPlanningDecisionNoticePage extends DeveloperUploadPlanningDecisionNoticePage {

  get path () {
    return 'combined-case/upload-planning-decision-notice'
  }

  open () {
    return super.open(this.path)
  }
}
module.exports = CombinedCaseUploadPlanningDecisionNoticePage
