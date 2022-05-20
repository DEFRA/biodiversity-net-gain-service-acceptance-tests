const Page = require("./base-page");

//not calling correctly
//const PAGE_TITLE = "Register land for off-site biodiversity gain";

class StartPage extends Page {
  open() {
    return super.open("start");
  }
}
module.exports = new StartPage();
