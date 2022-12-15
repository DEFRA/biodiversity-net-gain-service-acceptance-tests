const Page = require("../page");

class CheckYouCanRegisterPage extends Page {
  get titleText() {
    return "Check you have everything to register a biodiversity gain site";
  }

  get skipQuestions(){
    return $("a[href='/land/name']");
  }

  open() {
    return super.open("land/check-you-can-register");
  }
}
module.exports = new CheckYouCanRegisterPage();