const Page = require('../page')

class LegalAgreementCheckDetails extends Page {
  get titleText () {
    return 'Check the legal agreement details'
  }

  get acceptBtn () {
    return $('#accept')
  }

  get agreementTypeValue () {
    return $('#add-legal-agreement-type-value')
  }

  get fileUploadedValue () {
    return $('#add-legal-agreement-file-value')
  }

  get legalPartiesValue () {
    return $('#add-legal-agreement-parties-value')
  }

  get startdateValue () {
    return $('#add-legal-agreement-start-date-value')
  }

  get changeAgreementType () {
    return $('#add-legal-agreement-parties')
  }

  get changeFileUploaded () {
    return $('#add-legal-agreement-file')
  }

  get changeLegalParties () {
    return $('#add-legal-agreement-parties')
  }

  get changeStartdate () {
    return $('#add-legal-agreement-start-date')
  }

  open () {
    return super.open('land/check-legal-agreement-details')
  }
}
module.exports = LegalAgreementCheckDetails
