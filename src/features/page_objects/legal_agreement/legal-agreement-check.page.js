const Page = require("../page");

class LegalAgreementCheck extends Page {
  get titleText() {
    return "Check the legal agreement file";
  }

  get downloadLink() {
    return $("#legal-agreement-download");
  }

  open() {
    return super.open("land/check-legal-agreement");
  }
}
module.exports = new LegalAgreementCheck();
