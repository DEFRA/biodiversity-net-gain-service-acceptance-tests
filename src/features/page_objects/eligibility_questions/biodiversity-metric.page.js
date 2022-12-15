const Page = require("../page");

class BiodiversityMetricPage extends Page {
  get titleText() {
    return "Do you have a completed Biodiversity Metric 4.0 for the biodiversity gain site?";
  }

  open() {
    return super.open("land/biodiversity-metric");
  }
}
module.exports = new BiodiversityMetricPage();