const Page = require("../page");

class DeveloperTaskListPage extends Page {
  get titleText() {
    return "Record allocation of off-site biodiversity gains to a development";
  } 
  //developer sections
  get addapplicantDetails(){
    return $("a[href='/developer/agent-acting-for-client");
  }
  get addapplicantDetailsStatus(){
    return $("#applicant-details-status");
  }
  get addBiodiversityGainSiteInfo(){
    return $("a[href='/developer/biodiversity-gain-site-number");
  }
  get addBiodiversityGainSiteInfoStatus(){
    return $("#gain-site-allocation-info-status");
  }
  get addDevelopmentInformation() {
    return $("a[href='/developer/development-project-information']");
  }

  get addDevelopmentProjectInfoStatus(){
    return $("#add-devlopment-project-information-Status");
  }
  get addPlanningDecisionNoticeInfo(){
    return $("a[href='/developer/upload-planning-decision-notice");
  }
  get addPlanningDecisionNoticeStatus(){
    return $("#planning-decision-notice-status");
  }

  get devCheckAndSubmitBtn(){
       return $("a[href='/developer/check-and-submit']");
  }
  //////////////////////

//   // from Landowner Journey taskList
//   get progressText(){
//     return $(".govuk-\\!-margin-bottom-4");
//   }

//   get addDetails() {
//     return $("#add-your-details");
//   }

//   get addMetric() {
//     return $("#add-habitat-information");
//   }

//   get submitInformation(){
//     return $("#check-your-answers");
//   }

//   get detailsStatus() {
//     return $("#add-your-details-status");
//   }

//   get uploadMetricFileBtn(){
//     return $("#upload-metric-file");
//   }

//   get metricStatus() {
//     return $("#add-habitat-information-status");
//   }

//   get submitStatus(){
//     return $("#check-your-answers-status");
//   }

//   get additionalEmailBtn(){
//     return $("a[href='/developer/email-entry']");
//   }

//   get submitInformationButton(){
//     return $("a[href='/developer/check-and-submit']");
//   }
// ////// 

  open() {
    return super.open("developer/tasklist");
  }
}
module.exports = new DeveloperTaskListPage();