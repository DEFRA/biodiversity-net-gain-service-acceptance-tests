//CD111 https://docs.google.com/document/d/114WTUAr26eQRTIX0rYwV68koesneXxB5/edit
const Page = require("../../page");

class NeedAddAllLegalFilesPage extends Page {
  get titleText() {
    return "You need to add all planning obligation (section 106 agreement) files";
  }

  open() {
    return super.open("land/need-add-all-legal-files");
  }
}
module.exports = new NeedAddAllLegalFilesPage();