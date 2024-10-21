// Copydeck CD75
const Page = require('../page')

class LocalLandChargeNeedPage extends Page {
  get titleText () {
    return 'You need a local land charge search certificate'
  }

  open () {
    return super.open('land/need-local-land-charge')
  }
}
module.exports = LocalLandChargeNeedPage
