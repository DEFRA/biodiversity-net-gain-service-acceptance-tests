const Page = require("../page");

class LegalAgreementCheckFile extends Page {
  get titleText() {
    return "Check the legal agreement file";
  }

  get downloadLink() {
    return $("#document-download");
  }

  open() {
    return super.open("land/check-legal-agreement-file");
  }
}
module.exports = new LegalAgreementCheckFile();
