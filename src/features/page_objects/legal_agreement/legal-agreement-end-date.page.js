// copy deck CD87 https://docs.google.com/document/d/1VtawWeKbc-ksj3NtUPM77bW4XAjLNiab/edit#heading=h.gjdgxs
const Page = require("../page");

class LegalAgreementEndDatePage extends Page {
  get titleText() {
    return "Does the legal agreement have an end date?";
  }

  open() {
    return super.open("land/legal-agreement-end-date");
  }
}
module.exports = new LegalAgreementEndDatePage();