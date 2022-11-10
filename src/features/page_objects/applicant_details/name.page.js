const Page = require("../page");

class ApplicantDetailsName extends Page {
  get titleText() {
    return "What is your name?";
  }

  get fullName() {
    return $("#fullName");
  }
  
  open() {
    return super.open("land/name");
  }
}
module.exports = new ApplicantDetailsName();
