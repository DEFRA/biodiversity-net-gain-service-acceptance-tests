const Page = require("../page");

class creditsPurchaseDevelopmentInformationPage extends Page {
  get titleText() {
    return "Development project information";
  }

  get path() {
    return "credits-purchase/development-project-information";
  }

  open() {
    return super.open(this.path);
  }
}
module.exports = new creditsPurchaseDevelopmentInformationPage();