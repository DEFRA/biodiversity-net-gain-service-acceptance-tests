const UploadWrittenAuthorisationPage = require('../../applicant_info/upload-written-authorisation.page')

class CombinedCaseUploadWrittenAuthorisationPage extends UploadWrittenAuthorisationPage {
  get path () {
    return 'combined-case/upload-written-authorisation'
  }

  open () {
    return super.open(this.path)
  }
}
module.exports = CombinedCaseUploadWrittenAuthorisationPage
