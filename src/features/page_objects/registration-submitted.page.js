const Page = require("./page");

class ConfirmationPage extends Page {
  get titleText() {
    return "Registration submitted";
  }

  open() {
    return super.open("/registration-submitted");
  }
}
module.exports = new ConfirmationPage();