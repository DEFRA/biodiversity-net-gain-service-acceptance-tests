const Page = require('../page')

class ManagementPlanUpload extends Page {
  get titleText () {
    return 'Upload the habitat management and monitoring plan'
  }

  get path () {
    return 'land/upload-management-plan'
  }

  open () {
    return super.open(this.path)
  }
}
module.exports = ManagementPlanUpload
