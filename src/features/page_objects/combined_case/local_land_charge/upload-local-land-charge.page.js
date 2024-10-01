// Copydeck CD73
const LocalLandChargeUploadPage = require("../../local_land_charge/upload-local-land-charge.page");

class CombinedCaseLocalLandChargeUploadPage extends LocalLandChargeUploadPage {

  get path() {
    return "combined-case/upload-local-land-charge";
  }

  open() {
    return super.open(this.path);
  }
}
module.exports = CombinedCaseLocalLandChargeUploadPage;
