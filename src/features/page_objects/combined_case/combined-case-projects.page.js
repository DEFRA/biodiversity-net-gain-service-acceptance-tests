const Page = require("../page");

class CombinedCaseApplicationListPage extends Page {
  get titleText() {
    return "Combined biodiversity gain site and development project applications";
  }

  get registerNewGainSiteAndAllocateLink() {
    return $("#create-combined-case");
  }

  open() {
    return super.open("combined-case/combined-case-projects");
  }
}
module.exports = CombinedCaseApplicationListPage;