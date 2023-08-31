const Page = require("./page");

class ConfirmationPage extends Page {
  get titleText() {
    return "Application submitted";
  }

  get referenceNumber(){
    return $('*[data-testid="application-reference-value"]');

    //return $(".govuk-panel__body govuk-!-font-size-27");
  }

  open() {
    return super.open("application-submitted");
  }
}
module.exports = new ConfirmationPage();