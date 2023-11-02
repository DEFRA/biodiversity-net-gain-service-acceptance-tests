const Page = require("./page");

class ManageBngPage extends Page {
  get titleText() {
    return "Manage biodiversity gains";
  }

  get manageGainSiteslink() {
    return $("a[href='/land/biodiversity-gain-sites']");
  }

  open() {
    return super.open("land/manage-biodiversity-gains");
  }
}
module.exports = new ManageBngPage();