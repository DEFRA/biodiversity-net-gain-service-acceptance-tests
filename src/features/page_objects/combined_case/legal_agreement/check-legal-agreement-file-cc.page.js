const LegalAgreementCheckFileCC = require('../../legal_agreement/conservation_covenant/check-legal-agreement-file-cc.page')

class CombinedCaseLegalAgreementCheckFileCCPage extends LegalAgreementCheckFileCC {

  open () {
    return super.open('combined-case/check-legal-agreement-file')
  }
}
module.exports = CombinedCaseLegalAgreementCheckFileCCPage