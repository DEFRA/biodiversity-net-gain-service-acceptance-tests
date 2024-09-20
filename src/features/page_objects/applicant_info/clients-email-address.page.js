//cd128 https://docs.google.com/document/d/1vu-vYg1NvpYCHU_lYHZJVCy-1Jvfdl_J/edit
const Page = require("../page");

class ClientsEmailPage extends Page {
  get titleText() {
    return "What is your client's email address?";
  }
  
  open() {
    return super.open("land/clients-email-address");
  }
}
module.exports = ClientsEmailPage;