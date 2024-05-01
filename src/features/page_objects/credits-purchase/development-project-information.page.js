const Page = require("../page");

class creditsPurchaseDevelopmentInformationPage extends Page {
  get titleText() {
    return "Development project information";
  }

  get planningApplicationNumber(){
    return $("#planning-application-reference-value")
  }

  get developmentName(){
    return $("#development-name-value")
  }

  get path() {
    return "credits-purchase/development-project-information";
  }

  open() {
    return super.open(this.path);
  }
}
module.exports = new creditsPurchaseDevelopmentInformationPage();