// CD111 https://docs.google.com/document/d/114WTUAr26eQRTIX0rYwV68koesneXxB5/edit
const Page = require('../../page')

class AddPlanningAuthorityPage extends Page {
  get titleText () {
    return 'Add a local planning authority listed on the planning obligation (section 106 agreement)'
  }

  open () {
    return super.open('land/add-planning-authority')
  }
}
module.exports = AddPlanningAuthorityPage
