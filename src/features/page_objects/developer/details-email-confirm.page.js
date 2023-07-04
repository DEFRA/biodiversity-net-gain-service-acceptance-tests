const Page = require("../page");

class DeveloperApplicantCorrectEmail extends Page {

  get emailTextbox() {
    return $("#newEmailAddress");
  }

  open() {
    return super.open("developer/details-email-confirm");
  }
}
module.exports = new DeveloperApplicantCorrectEmail();