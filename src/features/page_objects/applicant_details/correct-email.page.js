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

  async confirmEmailAddress() {
    await (this.radioYes).click();
    await (this.continueButton).click();
  }
  
  open() {
    return super.open("land/email");
  }
}
module.exports = new ApplicantDetailsCorrectEmail();