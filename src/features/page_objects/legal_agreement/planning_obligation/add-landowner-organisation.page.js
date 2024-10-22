// CD102  https://docs.google.com/document/d/1bZbK9REYXWk1pG2cQy6R-KGGD01R7xdo/edit
const Page = require('../../page')

class AddLandownerOrganisationPage extends Page {
  get titleText () {
    return 'Add a landowner or leaseholder listed on the planning obligation (Section 106 agreement)'
  }

  open () {
    return super.open('land/add-landowner-organisation')
  }
}
module.exports = new AddLandownerOrganisationPage()
