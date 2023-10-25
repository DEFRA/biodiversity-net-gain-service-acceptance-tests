// copydeck CD112 https://docs.google.com/document/d/1l3KGLmsFuHzy2cZ1WD96gIoEOzmy_54T/edit
const Page = require("../page");

class LegalAgreementCheckAddedAllFilesPage extends Page {
  get titleText() {
    return "You have added [number] legal agreement file[/files]";
  }

  get downloadLink() {
    return $("#document-download");
  }

  open() {
    return super.open("land/check-you-added-all-legal-files");
  }
}
module.exports = new LegalAgreementCheckAddedAllFilesPage();