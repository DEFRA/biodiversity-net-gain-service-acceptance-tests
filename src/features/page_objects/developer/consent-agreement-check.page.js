const Page = require("../page");

class DeveloperConsentAgreementCheckPage extends Page {
  get titleText() {
    return "Check your written consent file";
  }

  get path() {
    return "developer/consent-agreement-check";
  }

  open() {
    return super.open(this.path);
  }
}
module.exports = new DeveloperConsentAgreementCheckPage();