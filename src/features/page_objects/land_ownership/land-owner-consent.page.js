const Page = require('../page')

class LandownerConsentPage extends Page {
  get titleText () {
    return 'Landowner consent declaration'
  }

  get landownerConsentChkBox () {
    return $("input[value='true']")
  }

  get path () {
    return 'land/landowner-consent'
  }

  open () {
    return super.open(this.path)
  }
}
module.exports = new LandownerConsentPage()
