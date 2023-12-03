const Page = require("./page");

class TaskList extends Page {
  get titleText() {
    return "Register land as a biodiversity gain site";
  }

  get progressText(){
    return $(".govuk-\\!-margin-bottom-4");
  }

  get addApplicantInfo() {
    return $("#add-applicant-information");
  }

  get addLandBoundary() {
    return $("#add-land-boundary");
  }

  get addLandOwnership() {
    return $("#add-land-ownership");
  }

  get addMetric() {
    return $("#add-habitat-information");
  }

  get addHmmp(){
    return $("#add-habitat-management");
  }

  get addLegalAgreement() {
    return $("#add-legal-agreement");
  }

  get addLocallandCharge() {
    return $("#add-local-land-charge-search-certificate");
  }
  
  get submitInformation(){
    return $("#check-your-answers");
  }

  get applicantInfoStatus() {
    return $("#add-applicant-information-status");
  }

  get landBoundaryStatus() {
    return $("#add-land-boundary-status");
  }

  get landOwnershipStatus() {
    return $("#add-land-ownership-status");
  }

  get metricStatus() {
    return $("#add-habitat-information-status");
  }

  get hmmpStatus(){
    return $("#add-habitat-management-status");
  }

  get legalAgreementStatus() {
    return $("#add-legal-agreement-status");
  }

  get localLandChargeStatus() {
    return $("#add-local-land-charge-search-certificate-status");
  }

  //developer sections
  get uploadMetricFileStatus(){
    return $("#upload-metric-file-status");
  }

  get confirmDevelopmentDetailsStatus(){
    return $("#confirm-development-details-status");
  }

  get confirmOffSiteGainStatus(){
    return $("#confirm-off-site-gain-status");
  }
  
  get uploadConsentDocumentStatus() {
    return $("#upload-consent-document-status");
  }
  //////////////////////

  get submitStatus(){
    return $("#check-your-answers-status");
  }

  get checkAndSubmitBtn(){
    return $("a[href='/land/check-and-submit']");
  }

  open() {
    return super.open("land/register-land-task-list");
  }
}
module.exports = new TaskList();
