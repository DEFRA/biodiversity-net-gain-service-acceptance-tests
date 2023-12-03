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
  
  get radioDefraIdChooseIndiviual(){
    return $("input[label='dc5d6426-c119-ee11-8f6d-6045bd90523f']");
  }

  get radioDefraIdChooseOrg(){
    return $("input[label='b7f8e793-1d7e-ee11-8179-6045bd905c11']");
  }

  get continuButtonReplacement(){
    return $('#continueReplacement');
  }

  get titleHeader(){
    return $('#header');
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