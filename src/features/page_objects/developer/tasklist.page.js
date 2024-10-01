const RegisterTasklistPage = require("../register-land-task-list.page")

class DeveloperTaskListPage extends RegisterTasklistPage {
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
  get devCheckAndSubmitBtn(){
       return $("a[href='/developer/check-and-submit']");
  }
  open() {
    return super.open("developer/tasklist");
  }
}
module.exports = DeveloperTaskListPage;