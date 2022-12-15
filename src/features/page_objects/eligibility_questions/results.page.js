const Page = require("../page");

class ResultsPage extends Page {
  get titleText() {
    return "You have everything you need to register";
  }

  get dontHaveEverythingTitleText() {
    return "You do not have everything you need to register";
  }

  open() {
    return super.open("land/results");
  }
}
module.exports = new ResultsPage();