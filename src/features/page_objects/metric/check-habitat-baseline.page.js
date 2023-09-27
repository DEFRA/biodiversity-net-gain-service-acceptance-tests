const Page = require("../page");

class MetricDisplayBaseline extends Page {
  get titleText() {
    return "Check the habitat baseline information - GOV.UK";
  }

  
  open() {
    return super.open("land/check-habitat-baseline");
  }
}
module.exports = new MetricDisplayBaseline();