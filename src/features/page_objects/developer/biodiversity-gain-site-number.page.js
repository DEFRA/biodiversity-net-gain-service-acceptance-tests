const Page = require("../page");

class DeveloperBiodiversityGainSiteNumberPage extends Page {
  get titleText() {
    return "Enter your biodiversity gain site number";
  }

  get path() {
    return "developer/biodiversity-gain-site-number";
  }

  get offSiteReferenceNumber(){
    return $("#bgsNumber");
  }

  open() {
    return super.open(this.path);
  }
}
module.exports = new DeveloperBiodiversityGainSiteNumberPage();