const Page = require("../page");

class DeveloperConfirmOffSiteGainPage extends Page {
  get titleText() {
    return "Confirm habitats being used by the development for off-site gain";
  }

  get path() {
    return "developer/confirm-off-site-gain";
  }

  open() {
    return super.open(this.path);
  }
}
module.exports = new DeveloperConfirmOffSiteGainPage();