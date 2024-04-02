const Page = require("../page");

class CreditsTierPage extends Page {
  get titleText() {
    return "Add statutory biodiversity credits";
  }

  open() {
    return super.open("credits-estimation/credits-tier");
  }
}
module.exports = new CreditsTierPage();