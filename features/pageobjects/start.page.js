const Page = require("./page");

//not calling correctly
//const PAGE_TITLE = "Register land for off-site biodiversity gain";

class StartPage extends Page {
  get getHeading() {
    return $(".govuk-heading-xl");
  }

  get startButton() {
    return $(".govuk-button--start']");
  }

  get continueButton() {
    return $(".govuk-link app-button-link");
  }

  open() {
    return super.open("start");
  }
}
module.exports = new StartPage();
