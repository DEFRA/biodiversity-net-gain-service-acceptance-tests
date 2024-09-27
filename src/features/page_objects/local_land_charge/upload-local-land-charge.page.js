// Copydeck CD73
const Page = require("../page");

class LocalLandChargeUploadPage extends Page {
  get titleText() {
    return "Upload the local land charge search certificate";
  }

  get path() {
    return "land/upload-local-land-charge";
  }

  open() {
    return super.open(this.path);
  }
}
module.exports = LocalLandChargeUploadPage;
