const Page = require("../page");

class CreditsPurchaseCheckMetricUploadPage extends Page {
  get titleText() {
    return "Check the statutory biodiversity metric file";
  }

  get path() {
    return "credits-purchase/check-metric-file";
  }

  open() {
    return super.open(this.path);
  }
}
module.exports = CreditsPurchaseCheckMetricUploadPage;