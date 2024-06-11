const Page = require("../page");

class creditsApplicationListPage extends Page {
  get titleText() {
    return "Statutory biodiversity credits";
  }

  get createNewCreditApplicationLink() {
    return $("#create-credits-purchase");
  }

  open() {
    return super.open("credits-purchase/check-statutory-biodiversity-credits");
  }
}
module.exports = new creditsApplicationListPage();