const Page = require('../page')

class AddStatutoryBiodiversityCreditsPage extends Page {
  get titleText () {
    return 'Add statutory biodiversity credits'
  }

  get habitatUnitA1 () {
    return $('#a1-units')
  }

  get habitatUnitA2 () {
    return $('#a2-units')
  }

  get habitatUnitA3 () {
    return $('#a3-units')
  }

  get habitatUnitA4 () {
    return $('#a4-units')
  }

  get habitatUnitA5 () {
    return $('#a5-units')
  }

  get habitatUnitH () {
    return $('#h-units')
  }

  get habitatUnitW () {
    return $('#w-units')
  }

  open () {
    return super.open('credits-purchase/add-statutory-biodiversity-credits')
  }
}
module.exports = AddStatutoryBiodiversityCreditsPage
