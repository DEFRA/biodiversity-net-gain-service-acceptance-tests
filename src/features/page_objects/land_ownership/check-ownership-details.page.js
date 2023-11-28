const Page = require("../page");

class LandOwnershipCheckDetailsPage extends Page {
  get titleText() {
    return "Check the land ownership details";
  }

  open() {
    return super.open("land/check-ownership-details");
  }
}
module.exports = new LandOwnershipCheckDetailsPage();