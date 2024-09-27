// CD150 - https://defra.sharepoint.com/:w:/r/sites/MST-NE-BNGDigitalServicesTeam/_layouts/15/Doc.aspx?sourcedoc=%7B34C2F89B-5339-4C80-B802-D7BA25F040D9%7D&file=CD150%20-%20Are%20there%20any%20other%20landowners.docx&action=default&mobileredirect=true&DefaultItemOpen=1
const Page = require("../page");

class LegalAgreementAnyOtherLandownersPage extends Page {
  get titleText() {
    return "Are there any other landowners or leaseholders listed";
  }

  open() {
    return super.open("land/any-other-landowners");
  }
}
module.exports = LegalAgreementAnyOtherLandownersPage;