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

  async isLoggedIn() {
    /* set a wait for the gove gateway creds to redirect back to the service 
    todo: this is very flaky and not sure its the best way to achieve this */   
    await browser.pause(5000);
  
    //check that we are logged in and not still on the sign in page
    var pageUrl = browser.getUrl();
    expect(await pageUrl).not.toContain('https://www.ete.access.service.gov.uk/login/signin/creds');
    expect(await pageUrl).not.toContain('https://dcidmtest.b2clogin.com');
     //If a new application then will redirect to the tasklist page Todo: get the Jira page
    // #Landing page - tasklist for new session (TODO refine after)
    // as random landing at the moment
    // await $("h1").waitForExist();
    // expect(await browser.getTitle()).toContain(TaskListPage.titleText);


    // expect(await LoginPage.titleHeader).toContain("Who do you want to represent?");
    // await LoginPage.radioDefraIdChooseIndiviual.click();
    // await LoginPage.continuButtonReplacement.click();
  }
  



  open() {
    return super.open("https://www.ete.access.service.gov.uk/login/signin/creds");
  }
}
module.exports = new LoginPage();