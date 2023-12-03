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

  async login(username, password) {
    await this.UserID.setValue(username);
    await this.Password.setValue(password);

    await browser.pause(5000);
    await this.SignInBtn.click();
  }

//   async function login(gatewayid, password) {
//     await (LoginPage.UserID).addValue(gatewayid);
//     await (LoginPage.Password).addValue(password);
    
//     await browser.pause(5000);
//     await (LoginPage.SignInBtn).click();
// }


  open() {
    return super.open("https://www.ete.access.service.gov.uk/login/signin/creds");
  }
}
module.exports = new LoginPage();