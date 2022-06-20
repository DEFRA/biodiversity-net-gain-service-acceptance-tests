const Page = require("./base-page");

class StartPage extends Page {
  get Title() {
    return "Register land for off-site biodiversity gain";
  }

  open() {
    return super.open("start");
  }
}
module.exports = new StartPage();
