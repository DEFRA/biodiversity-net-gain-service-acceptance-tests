const Page = require("../page");

class RegisteredLandowner extends Page {
  get titleText() {
    return "Are you the only registered landowner?";
  }

  get path() {
    return "land/registered-landowner";
  }

  open() {
    return super.open(this.path);
  }
}
module.exports = new RegisteredLandowner();