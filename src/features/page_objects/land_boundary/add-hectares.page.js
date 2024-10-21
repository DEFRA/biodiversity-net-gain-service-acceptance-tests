const Page = require('../page')

class LandBoundaryAddHectares extends Page {
  get titleText () {
    return 'How many hectares is the land?'
  }

  get getHectares () {
    return $('#hectares')
  }

  async addHectares (value) {
    await (await this.getHectares).clearValue()
    await this.getHectares.addValue(value)
    await (await this.continueButton).click()
  }

  open () {
    return super.open('land/add-hectares')
  }
}
module.exports = LandBoundaryAddHectares
