const Page = require("../page");

class LegalAgreementUpload extends Page {
  get titleText() {
    return "Upload the legal agreement";
  }

  get path() {
    return "land/upload-legal-agreement";
  }

  open() {
    return super.open(this.path);
  }
}
module.exports = new LegalAgreementUpload();
