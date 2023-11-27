// Copydeck CD132 https://docs.google.com/document/d/1VeFTBD4YfxRNRcVxaXd4xxDVjiKlDejv/edit
const Page = require("../page");

class CheckIfApplyingAsIndividualOrOrgPage extends Page {
  get titleText() {
    return "Are you applying as an individual or as part of an organisation?";
  }

  get path() {
    return "land/applying-individual-organisation";
  }

  open() {
    return super.open(this.path);
  }
}
module.exports = new CheckIfApplyingAsIndividualOrOrgPage();