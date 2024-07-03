const Page = require("../../page");

class DeveloperCheckAccountDetailsPage extends Page {
  get titleText() {
    return "Check your Defra account details are up to date";
  }

  get confirmAccountDetailsChkBox(){
    return $("input[value='true']");
  }

  get path() {
    return "developer/check-defra-account-details";
  }

  open() {
    return super.open(this.path);
  }
}
module.exports = new DeveloperCheckAccountDetailsPage();