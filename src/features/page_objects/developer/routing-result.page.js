const Page = require("../page");

class DeveloperRoutingResultPage extends Page {
  get titleText() {
    return "Before you record the off-site biodiversity gains for a development project";
  }

  get skipQuestions(){
    return $("a[href='/developer/details-name']");
  }

  open() {
    return super.open("developer/routing-result");
  }
}
module.exports = new DeveloperRoutingResultPage();