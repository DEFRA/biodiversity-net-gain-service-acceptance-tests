const Page = require("./page");

class LegalAgreementCheck extends Page {
  get Title() {
    return "Check the legal agreement file";
  }

  get downloadLink() {
    return $("#conservation-covenant-download");
    //return $("#legal-agreement-download");
  }

  open() {
    return super.open("/land/legal-agreement-check");
  }
}
module.exports = new LegalAgreementCheck();
