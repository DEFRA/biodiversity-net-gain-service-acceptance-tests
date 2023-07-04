const Page = require("../page");

class DeveloperAdditionalEmails extends Page {
  get titleText() {
    return "Enter additional email addresses";
  }

  get fullname0() {
    return $("#fullName-0");
  }

  get emailAddress0() {
    return $("#email0");
  }

  get skipAdditionalEmails()
  {
    return $("a[href='/developer/check-answers']");
  }
    
   open() {
     return super.open("developer/email-entry");
   }
}
module.exports = new DeveloperAdditionalEmails();