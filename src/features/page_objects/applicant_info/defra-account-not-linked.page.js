// Copydeck CD133 https://docs.google.com/document/d/1FQEAI8N6E4pXdhFMk2UuHjIs0GoFvwE6/edit
const Page = require("../page");

class DefraAccountNotlinkedPage extends Page {
  get titleText() {
    return "Your Defra account must be linked to the landowner or leaseholder’s organisation";
  }

  get path() {
    return "land/Defra-account-not-linked";
  }

  open() {
    return super.open(this.path);
  }
}
module.exports = new DefraAccountNotlinkedPage();