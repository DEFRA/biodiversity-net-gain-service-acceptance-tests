//copydeck CD99 https://docs.google.com/document/d/11-9ySqQC6hr8qCQdBKoIdL8Uzm-XmDIT/edit
const Page = require("../../page");

class AddLandownerOrganisationCCPage extends Page {
  get titleText() {
    return "Add a landowner or leaseholder listed on the conservation covenant";
  }


  open() {
    return super.open("land/add-landowner-organisation-conservation-covenant");
  }
}
module.exports = new AddLandownerOrganisationCCPage();