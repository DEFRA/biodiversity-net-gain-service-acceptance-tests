  const Page = require("../page");

  class DeveloperCheckYourDetails extends Page { 
  get titleText() {
    return "Check your details";
  }

  get fullnameValue(){
    return $("#fullname-value");
  }

  get roleValue(){
    return $("#role-value");
  }

  get emailValue(){
    return $("#email-value");
  }

  get changeFullname(){
    return $("#fullname");
  }

  get changeRole(){
    return $("#role");
  }

  get changeEmail(){
    return $("#email");
  }

  open() {
    return super.open("developer/details-confirm");
  }
}
module.exports = new DeveloperCheckYourDetails();