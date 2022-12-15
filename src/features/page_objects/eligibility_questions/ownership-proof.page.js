const Page = require("../page");

class OwnershipProofPage extends Page {
  get titleText() {
    return "Do you have proof of ownership for the land?";
  }

  open() {
    return super.open("land/ownership-proof");
  }
}
module.exports = new OwnershipProofPage();