const Page = require("../page");

class ApplicantDetailsCorrectEmail extends Page {
  get titleText() {
    return "Is this email address correct?";
  }
  
  get emailLabel(){
    return $("#correctEmail-hint")
  }

  get emailTextbox() {
    return $("#emailAddress");
  }
  
  open() {
    return super.open("land/email");
  }
}
module.exports = new ApplicantDetailsCorrectEmail();