const Page = require("./page");

class TaskList extends Page {
  get titleText() {
    return "Register a biodiversity gain site";
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
