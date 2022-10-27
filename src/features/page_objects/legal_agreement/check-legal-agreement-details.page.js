const Page = require("../page");

class LegalAgreementCheckDetails extends Page {
  get titleText() {
    return "Check the legal agreement details";
  }

  open() {
    return super.open("land/check-legal-agreement-details");
  }
}
module.exports = new LegalAgreementCheckDetails();
