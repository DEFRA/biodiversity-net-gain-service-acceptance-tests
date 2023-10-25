// copydeck CD89 https://docs.google.com/document/d/1MUc5wIYHSZrpnimPPZacgSW5lBiIqjux/edit
const Page = require("../page");

class HabitatPlanLegalAgreementPage extends Page {
  get titleText() {
    return "Is the habitat management and monitoring plan included in the legal agreement?";
  }

  get radioYes() { 
    return $("input[value='Yes']"); 
  }

  open() {
    return super.open("land/habitat-plan-legal-agreement");
  }
}
module.exports = new HabitatPlanLegalAgreementPage();