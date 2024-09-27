const LandOwnershipCheckDetailsPage = require("../../land_ownership/check-ownership-details.page")

class CombinedCaseLandOwnershipCheckDetailsPage extends LandOwnershipCheckDetailsPage {

  get path() {
    return "combined-case/check-ownership-details";
  }

  open() {
    return super.open(this.path);
  }
}
module.exports = new CombinedCaseLandOwnershipCheckDetailsPage;