const Page = require('../page')

class LandBoundaryChooseUploadOption extends Page {
  get titleText () {
    return 'Choose how to add the biodiversity gain site boundary'
  }

  get geospatialOption () {
    // location-options
    return $('#landBoundaryUploadType')
  }

  get imageOption () {
    // location-options-2
    return $('#landBoundaryUploadType-2')
  }

  get geospatialOptionLbl () {
    return $('#landBoundaryUploadType+ .govuk-radios__label')
  }

  get imageOptionLbl () {
    return $('#landBoundaryUploadType-2+ .govuk-radios__label')
  }

  get path () {
    return 'land/choose-land-boundary-upload'
  }

  async chooseLandboundaryFileType (fileType) {
    switch (fileType) {
      case 'geospatial':
        await expect(this.geospatialOption).toBeClickable;
        (await this.geospatialOption).click()
        break
      case 'Document or Image':
        await expect(this.imageOption).toBeClickable
        await (await this.imageOption).click()
        break
    }

    await this.continueButton.click()
  }

  open () {
    return super.open(this.path)
  }
}
module.exports = LandBoundaryChooseUploadOption
