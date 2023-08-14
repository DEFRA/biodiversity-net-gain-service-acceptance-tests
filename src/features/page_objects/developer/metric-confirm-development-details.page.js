const Page = require("../page");

class DeveloperConfirmDevelopmentDetailsPage extends Page {
  get titleText() {
    return "Confirm the development details";
  }

  get path() {
    return "developer/confirm-development-details";
  }

  open() {
    return super.open(this.path);
  }
}
module.exports = new DeveloperConfirmDevelopmentDetailsPage();