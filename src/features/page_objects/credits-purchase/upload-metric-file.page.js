const Page = require("../page");

class CreditsMetricUploadPage extends Page {
  get titleText() {
    return "Upload the statutory biodiversity metric";
  }

  open() {
    return super.open("credits-purchase/upload-metric-file");
  }
}
module.exports = CreditsMetricUploadPage;


