const Page = require("../page");

class LandOwnershipCheck extends Page {
  get titleText() {
    return "Check the proof of land ownership file";
  }

  get downloadLink() {
    return $("#document-download");
  }

  open() {
    return super.open("land/check-ownership-proof-file");
  }
}
module.exports = new LandOwnershipCheck();
