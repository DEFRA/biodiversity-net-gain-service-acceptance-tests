const Page = require("./base-page");

class StartPage extends Page {
  open() {
    return super.open("start");
  }
}
module.exports = new StartPage();
