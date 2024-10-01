// Copydeck CD74
const LocalLandChargeCheckPage = require("../../local_land_charge/check-local-land-charge.page");

class CombinedCaseLocalLandChargeCheckPage extends LocalLandChargeCheckPage {
  open() {
    return super.open("combined-case/check-local-land-charge");
  }
}
module.exports = CombinedCaseLocalLandChargeCheckPage;
