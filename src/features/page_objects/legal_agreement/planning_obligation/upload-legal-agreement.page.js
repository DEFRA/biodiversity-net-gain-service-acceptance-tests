const Page = require("../../page");

class LegalAgreementUpload extends Page {
  get titleText() {
    return "Upload the planning obligation (section 106 agreement)";
  }

  get path() {
    return "land/upload-legal-agreement";
  }

  open() {
    return super.open(this.path);
  }
}
module.exports = new LegalAgreementUpload();
