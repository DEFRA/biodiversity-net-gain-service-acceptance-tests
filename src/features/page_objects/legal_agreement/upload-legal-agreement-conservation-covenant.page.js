const Page = require("../page");

class LegalAgreementConservationCovenantUpload extends Page {
  get titleText() {
    return "Upload the conservation covenant";
  }

  get path() {
    return "land/upload-legal-agreement";
  }

  open() {
    return super.open(this.path);
  }
}
module.exports = new LegalAgreementConservationCovenantUpload();
