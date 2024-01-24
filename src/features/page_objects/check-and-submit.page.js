// CD31 https://defra.sharepoint.com/:w:/r/sites/MST-NE-BNGDigitalServicesTeam/_layouts/15/Doc.aspx?sourcedoc=%7BBB5226B0-83B5-4C5F-9E70-B6EA4B26F90B%7D&file=CD31%20%E2%80%93%20CYA%20and%20submit%20-%20LATEST%20(3).docx&action=default&mobileredirect=true
const Page = require("./page");

class CheckAndSubmit extends Page {
  get titleText() {
    return "Check your answers before submitting your information";
  }

  get changeFullname(){
    return $("a[href='/land/name']");
  }

  get fullnameValue(){
    return $('*[data-testid="applicant-full-name-value"]');
  }

  get roleValue(){
    return $('*[data-testid="applicant-role-value"]');
  }

  get emailAddressValue(){
    return $('*[data-testid="applicant-emailaddress-value"]');
  }

  get landBoundaryTypeValue(){
    return $('*[data-testid="land-boundary-file-type-value"]');
  }

  get landBoundaryFilenameValue(){
    return $('*[data-testid="land-boundary-file-name-value"]');
  }

  get gridReferenceValue() {
    return $('*[data-testid="grid-reference-value"]');
  }

  get hectaresValue(){
    return $('*[data-testid="area-in-hectares-value"]');
  }

  get landOwnershipFileNameValue(){
    return $('*[data-testid="proof-land-ownership-file-name-value"]');
  }

  get landOwnerNameValue(){
    return $('*[data-testid="land-owner-names-value"]');
  }

  get landOwnerNameConsentValue(){
    return $('*[data-testid="land-owner-consent-value"]');
  }

  get metricFileNameValue(){
    return $('*[data-testid="metric-file-name-value"]');
  }

  get hmmpFileNameValue(){
    return $('*[data-testid="habitat-plan-file-name-value"]');
  }

  get hmmpStartDateValue(){
    return $('*[data-testid="habitat-work-start-date-value"]');
  }

  get hmmp30YearStartDateValue(){
    return $('*[data-testid="management-monitoring-start-date-value"]');
  }

  get legalAgreementTypeValue(){
    return $('*[data-testid="legal-agreement-type-value"]');
  }

  get legalAgreementFileNameValue(){
    return $('*[data-testid="legal-agreement-file-name-value"]');
  }

  get legalPartyNameValue(){
    return $('*[data-testid="legal-agreement-parties-value"]');
  }

  get legalPartyRoleValue(){
    return $('*[data-testid="legal-agreement-parties-value"]');
  }

  get legalAgreementStartDateValue(){
    return $('*[data-testid="legal-agreement-start-date-value"]');
  }

  get confirmTermsAndConditionsChkBox(){
    return $("input[value='Yes']");
  }

  get confirmAndSubmitBtn(){
    return $(".govuk-button");
  }

  open() {
    return super.open("land/check-and-submit");
  }
}
module.exports = new CheckAndSubmit();