// CD31 https://defra.sharepoint.com/:w:/r/sites/MST-NE-BNGDigitalServicesTeam/_layouts/15/Doc.aspx?sourcedoc=%7BBB5226B0-83B5-4C5F-9E70-B6EA4B26F90B%7D&file=CD31%20%E2%80%93%20CYA%20and%20submit%20-%20LATEST%20(3).docx&action=default&mobileredirect=true
const CheckAndSubmitPage = require('../check-and-submit.page')

class CombinedCaseCheckAndSubmitPage extends CheckAndSubmitPage {
  open () {
    return super.open('combined-case/check-and-submit')
  }
}
module.exports = CombinedCaseCheckAndSubmitPage
