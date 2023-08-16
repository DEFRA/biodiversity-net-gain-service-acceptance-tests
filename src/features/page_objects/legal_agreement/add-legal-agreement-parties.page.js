const Page = require("../page");

class LegalAgreementAddParties extends Page {
  get titleText() {
    return "Add all parties listed on the planning obligation (section 106 agreement)";
  }

  get addAnotherLegalParty(){
    return $("#addOtherOrganisation");
  }

  get removeLegalParty2(){
  return $("#remove1");
  }

  get legalPartyFullName() {
    return $("[id='organisationName']");
  }

  get legalPartyFullName2() {
    return $("[id='organisation[1][organisationName]']");
  }
    
  get legalPartyRole(){
    return $("[id='landOwnerRole']");
  }

  get otherLegalPartyRoleOption(){
    return $("[id='other[0][role]'");
  }

  get legalPartyRole2(){
    //Todo: switch for changing role
    return $("[id='organisation[1][role]']");
  }

  async addLegalPartyRole(role) {
    //Todo add further roles?  //Todo: currently no unique identifiers in code awaiting bug fixes in BNGP-1267
    await this.legalPartyRole.waitForExist({ timeout: 5000 });
    await this.legalPartyRole.click();
  }

  open() {
    return super.open("land/add-legal-agreement-parties");
  }
}
module.exports = new LegalAgreementAddParties();