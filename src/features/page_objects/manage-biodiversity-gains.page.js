const Page = require("./page");

class ManageBngPage extends Page {
  get titleText() {
    return "Manage biodiversity gains";
  }

  get manageGainSitesLink() {
    return $("a[href='/land/biodiversity-gain-sites']");
  }

  get manageCreditApplicationsLink() {
    return $("a[href='/credits-purchase/check-statutory-biodiversity-credits']");
  }

  get manageOffSiteDevelopmentGainsLink() {
    return $("a[href='/developer/development-projects']");
  }

  open() {
    return super.open("land/manage-biodiversity-gains");
  }
}
module.exports = new ManageBngPage();