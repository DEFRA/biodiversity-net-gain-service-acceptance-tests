const Page = require("../page");

class uploadMetricFilePage extends Page {
  get titleText() {
    return "Upload the statutory biodiversity metric";
  }

  open() {
    return super.open("credits-purchase/upload-metric-file");
  }
}
module.exports = new uploadMetricFilePage();