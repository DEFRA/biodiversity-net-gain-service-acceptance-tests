const Page = require("../page");

class LandBoundaryAddHectares extends Page {
  get titleText() {
    return "How many hectares is the land?";
  }

  get getHectares() {
    return $("#hectares");
  }

  open() {
    return super.open("land/add-hectares");
  }
}
module.exports = new LandBoundaryAddHectares();
