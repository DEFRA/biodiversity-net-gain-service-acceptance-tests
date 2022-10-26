const Page = require("../page");

class LegalAgreementNeed extends Page {
  get titleText() {
    return "You need a legal agreement";
  }

  open() {
    return super.open("land/need-legal-agreement");
  }
}
module.exports = new LegalAgreementNeed();