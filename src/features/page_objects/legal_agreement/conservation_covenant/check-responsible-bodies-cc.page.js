// copydeck CD93 https://docs.google.com/document/d/14IWwjW3d7rQUJb-m2lPMOukWWldDZY1I/edit
const Page = require('../../page')

class CheckResponsibleBodiesPage extends Page {
  get titleText () {
    return 'You have added 1 responsible body'
  }

  open () {
    return super.open('land/check-responsible-bodies')
  }
}
module.exports = CheckResponsibleBodiesPage
