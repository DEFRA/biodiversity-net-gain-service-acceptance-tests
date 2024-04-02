const Page = require("../page");

class confirmTermsAndConditionsPage extends Page {
  get titleText() {
    return "Terms and conditions for the purchase of statutory biodiversity credits";
  }

  get termsAndConditionsCheckBox() {
    return $("#termsAndConditions");
  }

  open() {
    return super.open("credits-purchase/confirm-terms-conditions");
  }
}
module.exports = new confirmTermsAndConditionsPage();