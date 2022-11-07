const Page = require("../page");

class AddLandowners extends Page {
  get titleText() {
    return "Add all the registered landowners";
  }

  get path() {
    return "land/add-landowners";
  }

  open() {
    return super.open(this.path);
  }
}
module.exports = new AddLandowners();