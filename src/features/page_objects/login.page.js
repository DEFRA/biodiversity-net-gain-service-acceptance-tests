const Page = require("./page");

class StartPage extends Page {
  get titleText() {
    return "Sign in using Government Gateway";
  }

get UserID(){
    return $("[id$='user_id']");
}

get Password(){
    return $("[id$='password']");
}

  open() {
    return super.open("https://www.ete.access.service.gov.uk/login/signin/creds");
  }
}
module.exports = new StartPage();