const Page = require("../page");

class CheckYourDetails extends Page {
  get titleText() {
    return "Check your details";
  }

  get changeFullname(){
    return $("a[href^='/land/name']");
  }

  get changeRole(){
    return $("a[href^='/land/name']");
  }

  open() {
    return super.open("land/check-your-details");
  }
}
module.exports = new CheckYourDetails();