const Page = require("./page");

class BiodiversityGainSitePage extends Page {
  get titleText() {
    return "Biodiversity gain sites";
  }

  get registerNewGainSitelink() {
    return $("#create-registration");
  }

  open() {
    return super.open("land/manage-biodiversity-gains");
  }
}
module.exports = new BiodiversityGainSitePage();