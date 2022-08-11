const Page = require("../page");

class LegalAgreementUpload extends Page {
  get titleText() {
    return "Upload the legal agreement";
  }

  get path() {
    return "/land/upload-legal-agreement";
  }

  get errorMsg() {
    return $("#legalAgreement-error");
  }

  open() {
    return super.open("land/upload-legal-agreement");
  }
}
module.exports = new LegalAgreementUpload();
