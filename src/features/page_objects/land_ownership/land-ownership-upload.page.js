const Page = require("../page");

class LandOwnershipUpload extends Page {
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
module.exports = new LandOwnershipUpload();
