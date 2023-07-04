const Page = require("../page");

class DeveloperConsentAgreementUploadPage extends Page {
  get titleText() {
    return "Upload written consent to use a biodiversity gain site for off-site gain";
  }

  get path() {
    return "developer/consent-agreement-upload";
  }

  open() {
    return super.open(this.path);
  }
}
module.exports = new DeveloperConsentAgreementUploadPage();