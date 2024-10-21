const Page = require('./page')

class TaskList extends Page {
  get titleText () {
    return 'Register a biodiversity gain site'
  }

  get addApplicantInfo () {
    return $("a[href^='/land/agent-acting-for-client']")
  }

  get addLandBoundary () {
    return $("a[href^='/land/upload-land-boundary']")
  }

  get addMetric () {
    return $("a[href^='/land/upload-metric']")
  }

  get addLandOwnership () {
    return $("a[href^='/land/upload-ownership-proof']")
  }

  get addLegalAgreement () {
    return $("a[href^='/land/legal-agreement-type']")
  }

  get addLocallandCharge () {
    return $("a[href^='/land/upload-local-land-charge']")
  }

  get submitInformation () {
    return $('#check-your-answers')
  }

  get applicantInfoStatus () {
    return $('#add-applicant-information-status')
  }

  get landBoundaryStatus () {
    return $('#add-land-boundary-status')
  }

  get landOwnershipStatus () {
    return $('#add-land-ownership-status')
  }

  get metricStatus () {
    return $('#add-habitat-information-status')
  }

  get hmmpStatus () {
    return $('#add-habitat-management-status')
  }

  get legalAgreementStatus () {
    return $('#add-legal-agreement-status')
  }

  get localLandChargeStatus () {
    return $('#add-local-land-charge-search-certificate-status')
  }

  get checkAndSubmitBtn () {
    return $("a[href='/land/check-and-submit']")
  }

  open () {
    return super.open('land/register-land-task-list')
  }
}
module.exports = TaskList
