// copy deck CD88 https://docs.google.com/document/d/1ob1GbJTeyFqmu_ctTVUpXCLX5F8tRt2q/edit
const Page = require('../page')

class EnhancementWorksStartDatePage extends Page {
  get titleText () {
    return 'Have the habitat enhancement works started yet?'
  }

  open () {
    return super.open('land/enhancement-works-start-date')
  }
}
module.exports = EnhancementWorksStartDatePage
