// CD13 https://docs.google.com/document/d/1512UH8oObKC-6taSPuOhJ3ZEF25I8tBvu4FMeq-_grY/edit
const LandOwnershipCheckPage = require("../../land_ownership/land-ownership-check.page");

class CombinedCaseLandOwnershipCheckPage extends LandOwnershipCheckPage {
  open() {
    return super.open("combined-case/check-ownership-proof-file");
  }
}
module.exports = CombinedCaseLandOwnershipCheckPage;
