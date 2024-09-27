//CD08
const Page = require("../page");

class MetricUpload extends Page {
  get titleText() {
    return "Upload the statutory biodiversity metric calculations for the biodiversity gain site";
  }

  get path() {
    return "land/upload-metric";
  }

  open() {
    return super.open(this.path);
  }
}
module.exports = MetricUpload;
