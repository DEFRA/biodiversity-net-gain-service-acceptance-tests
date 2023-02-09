const Page = require("../page");

class LandBoundaryGridReference extends Page {
  get titleText() {
    return "What is the grid reference?";
  }

  get getGridRef() {
    return $("#gridReference");
  }

  async addGridReference(gridReference) {
    await (await this.getGridRef).clearValue();
    await this.getGridRef.addValue(gridReference);
    await (await this.continueButton).click();
    await expect(this.errorMsg).not.toBeDisplayed();
  }

  open() {
    return super.open("land/add-grid-reference");
  }
}
module.exports = new LandBoundaryGridReference();
