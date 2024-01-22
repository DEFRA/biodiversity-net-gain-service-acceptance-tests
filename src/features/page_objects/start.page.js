const Page = require("./page");

class StartPage extends Page {
  // get AcceptCookiesBtn(){
  //   return $(".govuk-button js-cookies-button-accept")
  // }

  get titleText() {
    return "Register a biodiversity gain site";
  }

  get getHeading() {
    return $(".govuk-heading-xl");
  }

  get startButton() {
    return $("a[href='/land/register-land-task-list']");
  }

  get returnToSavedApplicationLink(){
    return $("a[href='/land/continue-saved-registration']");
  }

  open() {
    return super.open("");
  }
}
module.exports = new StartPage();
