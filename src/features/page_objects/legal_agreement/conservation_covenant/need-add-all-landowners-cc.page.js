// CD94 https://docs.google.com/document/d/1u92k2KCIBW8lhKSjCEbvnD7riR8cWnm-/edit
const Page = require('../../page')

class NeedAddAllLandownersCCPage extends Page {
  get titleText () {
    return 'You need to add all landowners or leaseholders listed on the conservation covenant'
  }

  open () {
    return super.open('land/need-add-all-landowners-conservation-covenant')
  }
}
module.exports = NeedAddAllLandownersCCPage
