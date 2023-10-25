//copydeck CD96 https://docs.google.com/document/d/1ZMtfnn6U_VqWOk4lDr4OGC6cEJHuNFZ5/edit
const Page = require("../../page");

class AddLandownerIndividualCCPage extends Page {
  get titleText() {
    return "Add a landowner or leaseholder listed on the conservation covenant";
  }

  open() {
    return super.open("land/add-landowner-individual-conservation-covenant");
  }
}
module.exports = new AddLandownerIndividualCCPage();