const Page = require('../page')

class BoundaryPage extends Page {
  get titleText () {
    return 'Do you have a file that shows the boundary of the biodiversity gain site?'
  }

  open () {
    return super.open('land/boundary')
  }
}
module.exports = new BoundaryPage()
