const Page = require("../page");

class LandBoundaryGridReference extends Page {
  get titleText() {
    return "What is the grid reference?";
  }

  get getGridRef() {
    return $("#gridReference");
  }

  open() {
    return super.open("land/add-grid-reference");
  }
}
module.exports = new LandBoundaryGridReference();
