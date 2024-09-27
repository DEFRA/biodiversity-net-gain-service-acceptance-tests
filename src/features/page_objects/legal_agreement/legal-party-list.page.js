const Page = require("../page");

class LegalPartyListPage extends Page {
  get titleText() {
    return "You have added 2 legal parties";
  }

  get removeLegalParty1(){
    return $("a[href='/land/legal-party-remove?orgId=1']");
    }

  open() {
    return super.open("land/legal-party-list");
  }
}
module.exports = LegalPartyListPage;