//copydeck CD92 https://docs.google.com/document/d/1V8T-UTp3jRmxKhIWOk5w8KLaNqjrJKm3/edit
const Page = require("../../page");

class AddResponsibleBodyConservationCovenantPage extends Page {
  get titleText() {
    return "Add a responsible body listed on the conservation covenant";
  }

  get responsibleBodyName() {
    // return $("[id='responsibleBodyName']");
    return $("#responsibleBodyName");
  }

  open() {
    return super.open("land/add-responsible-body-conservation-covenant");
  }
}
module.exports = AddResponsibleBodyConservationCovenantPage;