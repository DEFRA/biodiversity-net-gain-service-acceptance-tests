// CD111 https://docs.google.com/document/d/114WTUAr26eQRTIX0rYwV68koesneXxB5/edit
const Page = require('../../page')

class NeedAddAllPlanningAuthoritiesPage extends Page {
  get titleText () {
    return 'You need to add all local planning authorities listed on the planning obligation (section 106 agreement)'
  }

  open () {
    return super.open('land/need-add-all-planning-authorities')
  }
}
module.exports = NeedAddAllPlanningAuthoritiesPage
