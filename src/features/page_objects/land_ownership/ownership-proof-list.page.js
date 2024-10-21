// copy deck CD83 https://docs.google.com/document/d/1Bals2MrXusuS_fLpbJpO1ntYgbEODWSS/edit
const Page = require('../page')

class LandOwnershipProofListPage extends Page {
  get titleText () {
    return 'You have added 1 proof of land ownership file'
  }

  open () {
    return super.open('land/land-ownership-list')
  }
}
module.exports = LandOwnershipProofListPage
