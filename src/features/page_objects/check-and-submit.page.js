const Page = require("./page");

class CheckAndSubmit extends Page {
  get titleText() {
    return "Check your answers before submitting your information";
  }

  get changeFullname(){
    return $("a[href='/land/name']");
  }

  get fullnameValue(){
    return $("/html/body/div[1]/main/form/div/div/div/dl[1]/div[1]/dd[1]");
  }

  get roleValue(){
    return $("/html/body/div[1]/main/form/div/div/div/dl[1]/div[2]/dd[1]");
  }

  get emailAddressValue(){
    return $("/html/body/div[1]/main/form/div/div/div/dl[1]/div[3]/dd[1]");
  }

  get landBoundaryTypeValue(){
    return $('*[data-testid="land-boundary-file-type-value"]');
  }

  get landBoundaryFilenameValue(){
    return $('*[data-testid="land-boundary-file-value"]');
  }

  get gridReferenceValue() {
    return $('*[data-testid="grid-reference-value"]');
  }

  get hectaresValue(){
    return $('*[data-testid="hectares-value"]');
  }

  get landOwnershipFileNameValue(){
    return $("/html/body/div[1]/main/form/div/div/div/dl[3]/div[1]/dd[1]");
  }

  get landOwnerNameValue(){
    return $("/html/body/div[1]/main/form/div/div/div/dl[3]/div[2]/dd[1]");
  }

  get metricFileNameValue(){
    return $("/html/body/div[1]/main/form/div/div/div/dl[4]/div/dd[1]");
  }

  get hmmpFileNameValue(){
    return $("/html/body/div[1]/main/form/div/div/div/dl[5]/div[1]/dd[1]");
  }

  get hmmpStartDateValue(){
    return $("/html/body/div[1]/main/form/div/div/div/dl[5]/div[2]/dd[1]");
  }

  get hmmp30YearStartDateValue(){
    return $("/html/body/div[1]/main/form/div/div/div/dl[5]/div[3]/dd[1]");
  }

  get legalAgreementTypeValue(){
    return $("/html/body/div[1]/main/form/div/div/div/dl[6]/div[1]/dd[1]");
  }

  get legalAgreementFileNameValue(){
    return $("/html/body/div[1]/main/form/div/div/div/dl[6]/div[2]/dd[1]");
  }

  get legalPartyNameValue(){
    return $("/html/body/div[1]/main/form/div/div/div/dl[6]/div[3]/dd[1]");
  }

  get legalPartyRoleValue(){
    return $("/html/body/div[1]/main/form/div/div/div/dl[6]/div[3]/dd[1]");
  }

  get legalAgreementStartDateValue(){
    return $("/html/body/div[1]/main/form/div/div/div/dl[6]/div[4]/dd[1]");
  }

  get confirmAndSubmitBtn(){
    return $(".govuk-button");
  }

  open() {
    return super.open("land/check-and-submit");
  }
}
module.exports = new CheckAndSubmit();