// copydeck CD74
const Page = require("../../page");

class LegalAgreementCheckFileCC extends Page {
  get titleText() {
    return "Check the conservation covenant file";
  }

  get downloadLink() {
    return $("#document-download");
  }

  open() {
    return super.open("land/check-legal-agreement-file");
  }
}
module.exports = LegalAgreementCheckFileCC;