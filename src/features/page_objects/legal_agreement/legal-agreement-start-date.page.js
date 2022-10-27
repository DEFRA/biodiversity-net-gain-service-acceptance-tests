const Page = require("../page");

class LegalAgreementStartDate extends Page {
  get titleText() {
    return "What is the start date of the legal agreement?";
  }

  get Day() {
    return $("#legalAgreementStartDate-day");
  }

  get Month() {
    return $("#legalAgreementStartDate-month");
  }

  get Year() {
    return $("#legalAgreementStartDate-year");
  }

  open() {
    return super.open("land/legal-agreement-start-date");
  }
}
module.exports = new LegalAgreementStartDate();