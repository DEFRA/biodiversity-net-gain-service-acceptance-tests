const Page = require("../page");

class LandOwnershipUploadPage extends Page {
  get titleText() {
    return "Upload proof of land ownership";
  }

  get path() {
    return "land/upload-ownership-proof";
  }

  open() {
    return super.open(this.path);
  }
}
module.exports = LandOwnershipUploadPage;
