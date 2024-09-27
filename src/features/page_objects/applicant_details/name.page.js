const Page = require("../page");

class ApplicantDetailsName extends Page {
  get titleText() {
    return "What is your name?";
  }

  get fullName() {
    return $("#fullName");
  }

  async addFullName(value) {
    await (this.fullName).clearValue();
    await this.fullName.addValue(value);
    await expect(this.fullName).toHaveValue(value);
    await (this.continueButton).click();
  }
 
  open() {
    return super.open("land/name");
  }
}
module.exports = ApplicantDetailsName;
