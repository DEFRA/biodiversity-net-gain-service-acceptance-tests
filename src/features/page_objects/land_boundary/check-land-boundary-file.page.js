const Page = require("../page");

class LandBoundaryCheckImageFile extends Page {
  open() {
    return super.open("/land/check-land-boundary-file");
  }
}
module.exports = new LandBoundaryCheckImageFile();
