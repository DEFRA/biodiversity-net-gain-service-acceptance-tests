const Page = require("../page");

class creditsPurchaseApplicationSubmittedPage extends Page {
  get titleText() {
    return "Application complete";
  }

  get path() {
    return "credits-purchase/application-submitted";
  }

  open() {
    return super.open(this.path);
  }
}
module.exports = new creditsPurchaseApplicationSubmittedPage();