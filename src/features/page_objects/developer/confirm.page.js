const Page = require("../page");

class DeveloperConfirmationPage extends Page {
  get titleText() {
    return "Application submitted";
  }

  get referenceNumber(){
    return $('*[data-testid="application-reference-value"]');

  }

  open() {
    return super.open("developer/confirm");
  }
}
module.exports = new DeveloperConfirmationPage();