// Copydeck CD123 https://docs.google.com/document/d/19KkLaDo5A1d_3iL8vJoY09UxiY4fMUDo/edit
const Page = require("../page");

class ClientsNamePage extends Page {
  get titleText() {
    return "What is your client's name?";
  }

  get path() {
    return "land/clients-name";
  }

  open() {
    return super.open(this.path);
  }
}
module.exports = ClientsNamePage;