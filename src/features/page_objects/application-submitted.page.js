const Page = require("./page");

class ConfirmationPage extends Page {
  get titleText() {
    return "Application submitted";
  }

  get referenceNumber(){
    return $('*[data-testid="application-reference-value"]');
  }

  get feeAmount(){
    // return $('*[data-testid="fee-amount-value"]');
      return $(".govuk-body-l");

  }
  
  get paymentRreference(){
    return $('*[data-testid="payment-reference-value"]');
  }

  get accountName(){
    return $('*[data-testid="account-name-value"]');
  }

  get sortCode(){
    return $('*[data-testid="sort-code-value"]');
  }

  get accountNumber(){
    return $('*[data-testid="account-number-value"]');
  }

  get swiftBicCode(){
    return $('*[data-testid="swift-bic-code-value"]');
  }

  open() {
    return super.open("application-submitted");
  }
}
module.exports = new ConfirmationPage();