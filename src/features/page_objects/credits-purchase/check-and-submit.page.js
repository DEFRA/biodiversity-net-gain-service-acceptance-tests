const Page = require("../page");

class creditsPurchaseCheckAndSubmitPage extends Page {
  get titleText() {
    return "Check your answers before you submit your information";
  }

  get path() {
    return "credits-purchase/check-and-submit";
  }

  open() {
    return super.open(this.path);
  }
}
module.exports = new creditsPurchaseCheckAndSubmitPage();