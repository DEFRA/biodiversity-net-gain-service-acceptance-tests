// copydeck CD90 https://docs.google.com/document/d/15W-X-_oUXcIZtDbXkc7U-ru_E29ctRaQ/edit
const Page = require('../../page')

class NeedAddAllResponsibleBodiesPage extends Page {
  get titleText () {
    return 'You need to add all responsible bodies listed on the conservation covenant'
  }

  open () {
    return super.open('land/need-add-all-responsible-bodies')
  }
}
module.exports = NeedAddAllResponsibleBodiesPage
