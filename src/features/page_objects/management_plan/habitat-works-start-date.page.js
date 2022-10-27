const Page = require("../page");

class HabitatWorksStartDate extends Page {
  get titleText() {
    return "When will the habitat enhancement works start?";
  }

  open() {
    return super.open("land/habitat-works-start-date");
  }
}
module.exports = new HabitatWorksStartDate();
