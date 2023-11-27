// Copydeck CD131 https://docs.google.com/document/d/1sagoaDk15zz1fmAZDFrxj96x_EuOM_Ed/edit
const Page = require("../page");

class CheckWrittenAuthorisationPage extends Page {
  get titleText() {
    return "Check your written authorisation file";
  }

  get path() {
    return "land/check-written-authorisation-file";
  }

  open() {
    return super.open(this.path);
  }
}
module.exports = new CheckWrittenAuthorisationPage();