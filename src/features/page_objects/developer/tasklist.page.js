const Page = require("../page");

class DeveloperTaskListPage extends Page {
  get titleText() {
    return "Record allocation of off-site biodiversity gains to a development";
  } 
  //developer sections
  get addapplicantDetails(){
    return $("#applicant-details");
  }
  get addapplicantDetailsStatus(){
    return $("#applicant-details-status");
  }
  get addBiodiversityGainSiteInfo(){
    return $("#gain-site-allocation-info");
  }
  get addBiodiversityGainSiteInfoStatus(){
    return $("#gain-site-allocation-info-status");
  }
  get addDevelopmentProjectInfo(){
    return $("#add-devlopment-project-information");
  }
  get addDevelopmentProjectInfoStatus(){
    return $("#add-devlopment-project-information-Status");
  }
  get addPlanningDecisionNoticeInfo(){
    return $("#planning-decision-notice");
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