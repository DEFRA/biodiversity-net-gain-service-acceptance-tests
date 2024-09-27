const Page = require("./page");

class ApplicationSubmittedPage extends Page {
  get titleText() {
    return "Application submitted";
  }

  get feeAmount(){
    return $('*[data-testid="fee-amount-value"]');
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
module.exports = ApplicationSubmittedPage;