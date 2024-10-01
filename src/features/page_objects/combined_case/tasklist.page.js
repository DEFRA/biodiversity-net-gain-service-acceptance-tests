const RegisterTasklistPage = require("../register-land-task-list.page")

class CombinedCaseTaskListPage extends RegisterTasklistPage {
    get titleText() {
      return "Register a biodiversity gain site and development project application";
    } 

    get addApplicantInfo() {
      return $("a[href='/combined-case/agent-acting-for-client']");
    }

    get addLandBoundary() {
      return $("a[href='/combined-case/upload-land-boundary']");
    }

    get addMetric() {
      return $("a[href='/combined-case/upload-metric']");
    }

    get addLandOwnership() {
      return $("a[href='/combined-case/upload-ownership-proof']");
    }

    get addLegalAgreement() {
      return $("a[href='/combined-case/legal-agreement-type']");
    }

    get addLocallandCharge() {
      return $("a[href='/combined-case/upload-local-land-charge']");
    }
    //developer sections
    get addPlanningDecisionNoticeInfo(){
      return $("a[href='/combined-case/upload-planning-decision-notice");
    }

    get addMatchAvailableHabitats(){
      return $("a[href='/combined-case/upload-allocation-metric");
    }

    get addDevelopmentInformation() {
      return $("a[href='/combined-case/development-project-information']");
    }

  open() {
    return super.open("combined-case/tasklist");
  }
}
module.exports = CombinedCaseTaskListPage;