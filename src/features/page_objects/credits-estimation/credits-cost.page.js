const Page = require("../page");

class CreditsCostPage extends Page {
  get titleText() {
    return "Estimated cost of statutory biodiversity credits";
  }

  open() {
    return super.open("credits-estimation/credits-cost");
  }
}
module.exports = new CreditsCostPage();