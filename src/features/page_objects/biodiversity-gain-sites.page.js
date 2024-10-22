const Page = require('./page')

class BiodiversityGainSitePage extends Page {
  get titleText () {
    return 'Biodiversity gain sites'
  }

  get registerNewGainSiteLink () {
    return $('#create-registration')
  }

  open () {
    return super.open('land/biodiversity-gain-sites')
  }
}
module.exports = BiodiversityGainSitePage
