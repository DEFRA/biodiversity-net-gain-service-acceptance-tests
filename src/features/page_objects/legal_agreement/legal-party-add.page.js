const Page = require("../page");

class LegalPartyAddPage extends Page {
  get titleText() {
    return "Add a party listed on the planning obligation";
  }

  open() {
    return super.open("land/legal-party-add");
  }
}
module.exports = new LegalPartyAddPage();