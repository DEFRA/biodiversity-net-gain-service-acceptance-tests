const Page = require("../page");

class MetricUpload extends Page {
  get titleText() {
    return "Upload the Biodiversity Metric 4.1 calculations for the biodiversity gain site";
  }

  get path() {
    return "land/upload-metric";
  }

  open() {
    return super.open(this.path);
  }
}
module.exports = new MetricUpload();
