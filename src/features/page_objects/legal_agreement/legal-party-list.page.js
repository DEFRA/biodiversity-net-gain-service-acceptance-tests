const Page = require("../page");

class LegalPartyListPage extends Page {
  get titleText() {
    return "You have added 2 legal parties";
  }

  open() {
    return super.open("land/legal-party-list");
  }
}
module.exports = new LegalPartyListPage();