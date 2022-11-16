const Page = require("../page");

class ApplicantDetailsEmail extends Page {
  get titleText() {
    return "What is your email address?";
  }

  get emailAddress() {
    return $("#emailAddress");
  }
  
  open() {
    return super.open("land/email");
  }
}
module.exports = new ApplicantDetailsEmail();