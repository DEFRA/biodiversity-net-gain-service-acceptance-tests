// Copydeck CD74
const Page = require("../page");

class LocalLandChargeCheckPage extends Page {
  get titleText() {
    return "Check the local land charge search certificate file";
  }

  get downloadLink() {
    return $("#document-download");
  }

  open() {
    return super.open("land/check-local-land-charge");
  }
}
module.exports = LocalLandChargeCheckPage;
