const Page = require("../page");

class DeveloperMetricUploadPage extends Page {
  get titleText() {
    return "Upload the Biodiversity Metric 4.0 file";
  }

  get path() {
    return "developer/upload-metric-file";
  }

  open() {
    return super.open(this.path);
  }
}
module.exports = new DeveloperMetricUploadPage();