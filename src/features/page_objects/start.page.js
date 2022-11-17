const Page = require("./page");

class StartPage extends Page {
  get titleText() {
    return "Register land as a biodiversity gain site";
  }

  get getHeading() {
    return $(".govuk-heading-xl");
  }

  get startButton() {
    return $(".govuk-button");
  }

  open() {
    return super.open("");
  }
}
module.exports = new StartPage();
