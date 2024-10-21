// Copydeck CD75
const LocalLandChargeNeedPage = require('../../local_land_charge/need-local-land-charge.page')

class CombinedCaseLocalLandChargeNeedPage extends LocalLandChargeNeedPage {
  open () {
    return super.open('combined-case/need-local-land-charge')
  }
}
module.exports = CombinedCaseLocalLandChargeNeedPage
