const Page = require('../page')

class developerJourneyDevelopmentInformationPage extends Page {
  get titleText () {
    return 'Development project details'
  }

  get path () {
    return 'developer/development-project-information'
  }

  open () {
    return super.open(this.path)
  }
}
module.exports = developerJourneyDevelopmentInformationPage
