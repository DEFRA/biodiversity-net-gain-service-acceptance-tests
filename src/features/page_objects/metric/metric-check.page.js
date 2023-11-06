const Page = require("../page");

class MetricCheck extends Page {
  get titleText() {
    return "Check the Biodiversity Metric 4.1 file";
  }

  get downloadLink() {
    return $("#document-download");
  }

  open() {
    return super.open("land/check-metric-file");
  }
}
module.exports = new MetricCheck();
