const Page = require("./page");

class ConfirmationPage extends Page {
  get titleText() {
    return "Registration submitted";
  }

  get referenceNumber(){
    return $('*[data-testid="application-reference-value"]');

    //return $(".govuk-panel__body govuk-!-font-size-27");
  }

  open() {
    return super.open("registration-submitted");
  }
}
module.exports = new ConfirmationPage();