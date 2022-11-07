const Page = require("../page");

class LegalAgreementAddParties extends Page {
  get titleText() {
    return "Add all parties listed on the legal agreement";
  }

  get addAnotherLegalParty(){
    return $("#addOtherOrganisation");
  }

  get removeLegalParty2(){
  return $("#remove1");
  }

  get legalPartyName() {
    return $("[id='organisation[0][organisationName]']");
  }

  get legalPartyName2() {
    return $("[id='organisation[1][organisationName]']");
  }
    
  get legalPartyRole(){
    return $("[id='landowner[0][role]']");
  }

  get otherLegalPartyRoleOption(){
    return $("[id='otherOrganisation[0][role]'");
  }

  get legalPartyRole2(){
    //Todo: switch for changing role
    return $("[id='landowner[1][role]']");
  }

  open() {
    return super.open("land/add-legal-agreement-parties");
  }
}
module.exports = new LegalAgreementAddParties();