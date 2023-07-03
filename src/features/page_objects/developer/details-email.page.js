const Page = require("../page");

class DeveloperApplicantDetailsEmail extends Page {
  get titleText() {
    return "What is your email address?";
  }

  get emailAddress() {
    return $("#emailAddress");
  }

  async addEmailAddress(value) {

    // clear the original value
    await (this.emailAddress).clearValue();
    // add the email address 
    // // wait for focus on element before adding as addition is being skipped
    await (this.emailAddress).isFocused();
    await this.emailAddress.addValue(value);
    await expect(this.emailAddress).toHaveValue(value);
    await (this.continueButton).click();
  }
  
   open() {
     return super.open("developer/details-email");
   }
}
module.exports = new DeveloperApplicantDetailsEmail();