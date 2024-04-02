const Page = require("../page");

class DeveloperTaskListPage extends Page {
  get titleText() {
    return "Record off-site biodiversity gains for a development project";
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

  // from Landowner Journey taskList
  get progressText(){
    return $(".govuk-\\!-margin-bottom-4");
  }

  get addDetails() {
    return $("#add-your-details");
  }

  get addMetric() {
    return $("#add-habitat-information");
  }

  get submitInformation(){
    return $("#check-your-answers");
  }

  get detailsStatus() {
    return $("#add-your-details-status");
  }

get uploadMetricFileBtn(){
  return $("#upload-metric-file");
}

  get metricStatus() {
    return $("#add-habitat-information-status");
  }

  get submitStatus(){
    return $("#check-your-answers-status");
  }

  get additionalEmailBtn(){
    return $("a[href='/developer/email-entry']");
  }

  get checkAndSubmitBtn(){
    return $("a[href='/developer/check-and-submit']");
  }
////// 

  open() {
    return super.open("developer/tasklist");
  }
}
module.exports = new DeveloperTaskListPage();