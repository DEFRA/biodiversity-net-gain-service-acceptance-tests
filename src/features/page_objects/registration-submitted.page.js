const Page = require("./page");

class ConfirmationPage extends Page {
  get titleText() {
    return "Application submitted";
  }

  get referenceNumber(){
    return $('*[data-testid="application-reference-value"]');
  }

  open() {
    return super.open("registration-submitted");
  }
}
module.exports = new ConfirmationPage();