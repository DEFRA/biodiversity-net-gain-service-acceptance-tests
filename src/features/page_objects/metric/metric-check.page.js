const Page = require("../page");

class MetricCheck extends Page {
  get titleText() {
    return "Check your Biodiversity Metric 3.1 file";
  }

  get downloadLink() {
    return $("#document-download");
  }

  open() {
    return super.open("land/check-metric-file");
  }
}
module.exports = new MetricCheck();
