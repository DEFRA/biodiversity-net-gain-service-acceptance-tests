// CD126 https://docs.google.com/document/d/1QSvGVQKImREeHjQhByadKmgT8v3WCjZ_/edit
const Page = require("../page");

class ClientsUkAddressPage extends Page {
  get titleText() {
    return "What is your client's address?";
  }

  get path() {
    return "land/UK-address";
  }

  open() {
    return super.open(this.path);
  }
}
module.exports = ClientsUkAddressPage;