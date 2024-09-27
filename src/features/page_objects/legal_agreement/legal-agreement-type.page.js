const Page = require("../page");

class LegalAgreementType extends Page {
  get titleText() {
    return "Which legal agreement do you have?";
  }

  get downloadLink() {
    return $("#document-download");
  }

  get conservationCovenant() {
    return $("#conservation-covenant");
  }

  get planningObligation() {
    return $("#planning-obligation");
  }

  open() {
    return super.open("land/legal-agreement-type");
  }
}
module.exports = LegalAgreementType;