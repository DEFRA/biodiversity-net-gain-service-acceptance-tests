const Page = require("./page");

class StartPage extends Page {
  get titleText() {
    return "Register land for off-site biodiversity gain";
  }

  get getHeading() {
    return $(".govuk-heading-xl");
  }

  open() {
    return super.open("");
  }
}
module.exports = new StartPage();
