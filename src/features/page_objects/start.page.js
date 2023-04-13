const Page = require("./page");

class StartPage extends Page {
  get titleText() {
    return "Register land as a biodiversity gain site";
  }

  get getHeading() {
    return $(".govuk-heading-xl");
  }

  get startButton() {
    return $("a[href='/land/check-you-can-register']");
  }

  get returnToSavedApplicationLink(){
    return $("a[href='/land/continue-saved-registration']");
  }

  open() {
    return super.open("");
  }
}
module.exports = new StartPage();
