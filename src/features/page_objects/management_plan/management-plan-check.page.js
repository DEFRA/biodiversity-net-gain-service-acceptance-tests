const Page = require('../page')

class ManagementPlanCheck extends Page {
  get titleText () {
    return 'Check the habitat management and monitoring plan file'
  }

  open () {
    return super.open('land/check-management-plan-file')
  }
}
module.exports = ManagementPlanCheck
