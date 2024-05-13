const Page = require("../page");

class CreditsPurchaseApplicationListPage extends Page {
  get titleText() {
    return "Statutory biodiversity credits";
  }

  get registerNewGainSiteLink() {
    return $("#create-credits-purchase");
  }

  open() {
    return super.open("land/check-statutory-biodiversity-credits");
  }
}
module.exports = new CreditsPurchaseApplicationListPage();