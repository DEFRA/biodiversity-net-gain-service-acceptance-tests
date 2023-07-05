const Page = require("./page");

class DeveloperConfirmationPage extends Page {
  get titleText() {
    return "You’ve submitted your biodiversity details";
  }

  get referenceNumber(){
    return $('*[data-testid="application-reference-value"]');

  }

  open() {
    return super.open("developer/confirm");
  }
}
module.exports = new DeveloperConfirmationPage();