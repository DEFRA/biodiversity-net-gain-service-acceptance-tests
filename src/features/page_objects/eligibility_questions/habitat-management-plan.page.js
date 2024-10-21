const Page = require('../page')

class HabitatManagementPlanPage extends Page {
  get titleText () {
    return 'Do you have a habitat management and monitoring plan for the biodiversity gain site?'
  }

  open () {
    return super.open('land/habitat-management-plan')
  }
}
module.exports = new HabitatManagementPlanPage()
