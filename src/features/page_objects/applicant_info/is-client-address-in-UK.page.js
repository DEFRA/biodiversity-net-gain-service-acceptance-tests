// Copydeck CD125 https://docs.google.com/document/d/1Y1CJRtrkv59G9-5FfMxaeEv7Rzn6yFva/edit#heading=h.gjdgxs
const Page = require("../page");

class IsClientAddressUkPage extends Page {
  get titleText() {
    return "Is your client's address in the UK?";
  }

  get path() {
    return "land/is-address-UK";
  }

  open() {
    return super.open(this.path);
  }
}
module.exports = new IsClientAddressUkPage();