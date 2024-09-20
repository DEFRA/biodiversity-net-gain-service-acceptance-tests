// Copydeck CD140 https://docs.google.com/document/d/1X7LSL_nfH3ed1HEegg2tTK00NtInmILv/edit
const Page = require("../page");

class CheckApplicantInfoPage extends Page {
  get titleText() {
    return "Check applicant information";
  }

  get path() {
    return "land/check-applicant-information";
  }

  open() {
    return super.open(this.path);
  }
}
module.exports = CheckApplicantInfoPage;