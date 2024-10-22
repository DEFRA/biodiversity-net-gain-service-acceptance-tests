const Page = require('../page')

class DevelopmentProjectsPage extends Page {
  get titleText () {
    return 'Development projects'
  }

  get createNewOffSiteDevelopmentGainslink () {
    return $('#create-allocation')
  }

  open () {
    return super.open('developer/development-projects')
  }
}
module.exports = new DevelopmentProjectsPage()
