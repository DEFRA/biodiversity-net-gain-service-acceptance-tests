const LegalAgreementTypePage = require("../../legal_agreement/legal-agreement-type.page");

class CombinedCaseLegalAgreementTypePage extends LegalAgreementTypePage {
  open() {
    return super.open("combined-case/legal-agreement-type");
  }
}
module.exports = CombinedCaseLegalAgreementTypePage;