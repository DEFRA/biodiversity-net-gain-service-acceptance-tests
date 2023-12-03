// Copydeck CD121  https://docs.google.com/document/d/1s8-Ut8Xt16lMnvJ96FLt_Vm8UvMpV5OI/edit
const Page = require("../page");

class CheckAccountDetailsPage extends Page {
  get titleText() {
    return "Check your Defra account details are up to date";
  }

  get confirmAccountDetailsChkBox(){
    return $("input[value='true']");
  }

  get path() {
    return "land/check-defra-account-details";
  }

  open() {
    return super.open(this.path);
  }
}
module.exports = new CheckAccountDetailsPage();