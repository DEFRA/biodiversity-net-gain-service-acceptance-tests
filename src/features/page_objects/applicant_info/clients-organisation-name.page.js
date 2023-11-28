// Copydeck CD124 https://docs.google.com/document/d/1N3zTJDpF94Vux4-NOZGowgl_iB3unH_r/edit#heading=h.gjdgxs
const Page = require("../page");

class ClientsOrgNamePage extends Page {
  get titleText() {
    return "What is your client’s organisation name?";
  }

  get path() {
    return "land/clients-organisation-name";
  }

  open() {
    return super.open(this.path);
  }
}
module.exports = new ClientsOrgNamePage();