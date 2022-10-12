const Page = require("../page");

class HabitatWorksStartDate extends Page {
  get titleText() {
    return "When will the habitat enhancement works start?";
  }

  get Day() {
    return $("#habitatWorksStartDate-day");
  }

  get Month() {
    return $("#habitatWorksStartDate-month");
  }

  get Year() {
    return $("#habitatWorksStartDate-year");
  }

  open() {
    return super.open("land/habitat-works-start-date");
  }
}
module.exports = new HabitatWorksStartDate();
