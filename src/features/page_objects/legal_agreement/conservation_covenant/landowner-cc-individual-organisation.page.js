
//CD95 https://docs.google.com/document/d/1Sx8cWOHAITc-O7Hk6eoUOaNUiWhiJ0h8/edit
const Page = require("../../page");

class LandownerIndividualOrOrganisationCCPage extends Page {
  get titleText() {
    return "Is the landowner or leaseholder listed on the conservation covenant an individual or organisation?";
  }

  get radioOrganisation() { 
    return $("input[value='organisation']"); 
  }

  get radioIndividual() {
    return $("input[value='individual']");
  }

  get path() {
    return "land/landowner-conservation-covenant-individual-organisation";
  }

  open() {
    return super.open(this.path);
  }
}
module.exports = LandownerIndividualOrOrganisationCCPage;