const Page = require("./page");

class StartPage extends Page {
  get Title() {
    return "Register land for off-site biodiversity gain";
  }

  open() {
    return super.open("");
  }
}
module.exports = new StartPage();
