const Page = require("./page");

class LoginPage extends Page {
  get titleText() {
    return "Sign in using Government Gateway";
  }

  get UserID(){
    return $("#user_id");
  }

  get Password(){
    return $("#password");
  }

  get SignInBtn() {
    return $("#continue");
  }

  open() {
    return super.open("https://www.ete.access.service.gov.uk/login/signin/creds");
  }
}
module.exports = new LoginPage();