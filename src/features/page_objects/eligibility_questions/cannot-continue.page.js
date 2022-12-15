const Page = require("../page");

class CannotContinuePage extends Page {
  get titleText() {
    return "You cannot continue";
  }

  open() {
    return super.open("land/cannot-continue");
  }
}
module.exports = new CannotContinuePage();