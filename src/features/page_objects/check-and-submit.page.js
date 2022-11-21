const Page = require("./page");

class CheckAndSubmit extends Page {
  get titleText() {
    return "Check your answers before submitting your information";
  }

  get addDetails() {
    return $("#add-your-details");
  }

  get addLandBoundary() {
    return $("#add-your-landboundary");
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

  get submitInformation(){
    return $("#check-your-answers");
  }

  get detailsStatus() {
    return $("#add-your-details-status");
  }

  get landBoundaryStatus() {
    return $("#add-your-landboundary-status");
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

  get submitStatus(){
    return $("#check-your-answers-status");
  }

  open() {
    return super.open("land/check-and-submit");
  }
}
module.exports = new CheckAndSubmit();