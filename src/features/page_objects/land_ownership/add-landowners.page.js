const Page = require("../page");

class AddLandownersPage extends Page {
  get titleText() {
    return "Add all the registered landowners";
  }

  get landownerTxtBox(){
    return $("#landowners");
  }

  get path() {
    return "land/add-landowners";
  }

  async addlandowner(landowner) {
    await (await this.landownerTxtBox).clearValue();
    await this.landownerTxtBox.addValue(landowner);
    await (await this.continueButton).click();
    await expect(this.errorMsg).not.toBeDisplayed();
  }

  open() {
    return super.open(this.path);
  }
}
module.exports = new AddLandownersPage();