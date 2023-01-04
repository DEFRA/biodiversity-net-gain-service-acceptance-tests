const Page = require("../page");

class RegisteredLandowner extends Page {
  get titleText() {
    return "Are you the only registered landowner?";
  }
  
  get onlyLandownerRadio(){
    return $("#landownerOnly");
  }

  get otherLandownersRadio(){
    return $("#landownerOnly-2");
  }

  get path() {
    return "land/registered-landowner";
  }

  open() {
    return super.open(this.path);
  }
}
module.exports = new RegisteredLandowner();