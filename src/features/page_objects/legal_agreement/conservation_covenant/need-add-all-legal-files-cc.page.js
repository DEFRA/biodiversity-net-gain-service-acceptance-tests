//CD111 https://docs.google.com/document/d/114WTUAr26eQRTIX0rYwV68koesneXxB5/edit
const Page = require("../../page");

class NeedAddAllLegalFilesCCPage extends Page {
  get titleText() {
    return "You need to add all conservation covenant files";
  }

  open() {
    return super.open("land/need-add-all-legal-files");
  }
}
module.exports = NeedAddAllLegalFilesCCPage;