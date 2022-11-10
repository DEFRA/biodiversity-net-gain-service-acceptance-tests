const Page = require("../page");

class ApplicantDetailsRole extends Page {
  get titleText() {
    return "What is your role?";
  }

  get fullName() {
    return $("#fullName");
  }

  get ecologist(){
    return $("#role-1")
  }

  get landagent(){
    return $("#role-2");
  }

  get landOwner(){
    return $("#role-3");
  }

  get leaseholder(){
    return $("#role-4");
  }

  get other(){
    return $("#role-5");
  }
  
  open() {
    return super.open("land/role");
  }
}
module.exports = new ApplicantDetailsRole();