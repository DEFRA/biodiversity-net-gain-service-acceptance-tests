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

  get addLandOwnership() {
    return $("a[href='/combined-case/upload-ownership-proof']");
  }

  get addLegalAgreement() {
    return $("a[href='/combined-case/legal-agreement-type']");
  }

  get addLocallandCharge() {
    return $("a[href='/combined-case/upload-local-land-charge']");
  }
  
  open() {
    return super.open("combined-case/tasklist");
  }
}
module.exports = new CombinedCaseTaskListPage();