const Page = require("./page");

class LegalAgreementUpload extends Page {
  get Title() {
    return "Upload the legal agreement";
  }

  open() {
    return super.open("/land/upload-legal-agreement");
  }
}
module.exports = new LegalAgreementUpload();
