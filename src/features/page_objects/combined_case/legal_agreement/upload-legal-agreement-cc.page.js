const LegalAgreementConservationCovenantUpload = require('../../legal_agreement/conservation_covenant/upload-legal-agreement-cc.page')

class CombinedCaseLegalAgreementCCUploadPage extends LegalAgreementConservationCovenantUpload {
  get path () {
    return 'combined-case/upload-legal-agreement'
  }

  open () {
    return super.open(this.path)
  }
}
module.exports = CombinedCaseLegalAgreementCCUploadPage
