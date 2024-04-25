const Page = require("../page");

class CreditsCheckCutomerDueDiligencePage extends Page {
  get titleText() {
    return "Check customer due diligence information";
  }

  get path() {
    return "credits-purchase/cdd-cya";
  }

  open() {
    return super.open(this.path);
  }
}
module.exports = new CreditsCheckCutomerDueDiligencePage();