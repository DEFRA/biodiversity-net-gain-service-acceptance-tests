// Copydeck CD130 https://docs.google.com/document/d/1jarLQW2eLBZvbvflpvbOioC_mJSKnD0k/edit
const Page = require('../page')

class UploadWrittenAuthorisationPage extends Page {
  get titleText () {
    return 'Upload written authorisation to apply'
  }

  get path () {
    return 'land/upload-written-authorisation'
  }

  open () {
    return super.open(this.path)
  }
}
module.exports = UploadWrittenAuthorisationPage
