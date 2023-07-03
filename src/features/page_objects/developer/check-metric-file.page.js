const Page = require("../page");

class DeveloperCheckMetricUploadPage extends Page {
  get titleText() {
    return "Check your Biodiversity Metric 4.0 file";
  }

  get path() {
    return "developer/check-metric-file";
  }

  open() {
    return super.open(this.path);
  }
}
module.exports = new DeveloperCheckMetricUploadPage();