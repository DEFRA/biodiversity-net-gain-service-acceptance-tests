//copy deck CD83 https://docs.google.com/document/d/1Bals2MrXusuS_fLpbJpO1ntYgbEODWSS/edit
const LandOwnershipProofListPage = require("../../land_ownership/ownership-proof-list.page");

class CombinedCaseLandOwnershipProofListPage extends LandOwnershipProofListPage {

  open() {
    return super.open("combined-case/land-ownership-list");
  }
}
module.exports = CombinedCaseLandOwnershipProofListPage;