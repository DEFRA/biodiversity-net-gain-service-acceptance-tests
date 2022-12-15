const Page = require("../page");

class SiteInEnglandPage extends Page {
  get titleText() {
    return "Is the biodiversity gain site in England?";
  }

  open() {
    return super.open("land/site-in-england");
  }
}
module.exports = new SiteInEnglandPage();