const Page = require("../page");

class DeveloperCheckAnswersPage extends Page {
  get titleText() {
    return "Check your answers before submitting your information";
  }

  get path() {
    return "developer/check-answers";
  }

  open() {
    return super.open(this.path);
  }
}
module.exports = new DeveloperCheckAnswersPage();