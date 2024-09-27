const Page = require("../page");

class DeveloperRoutingRegisterPage extends Page {
  get titleText() {
    return "What do you want to do?";
  }

  get radioRegisterGainSite(){
    return $("input[value='register-gain-site']");
  }

  get radioRecordOffsite(){
    return $("input[value='record-off-site']");
  }

  get path() {
    return "developer/routing-register";
  }

  open() {
    return super.open(this.path);
  }
}
module.exports = DeveloperRoutingRegisterPage;
