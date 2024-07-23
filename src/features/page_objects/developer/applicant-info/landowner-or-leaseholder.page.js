const Page = require("../../page");

class DeveloperLandownerOrLeaseholderPage extends Page {
  get titleText() {
    return "Are you the landowner or leaseholder?";
  }

  get path() {
    return "developer/landowner-or-leaseholder";
  }

  open() {
    return super.open(this.path);
  }
}
module.exports = new DeveloperLandownerOrLeaseholderPage();