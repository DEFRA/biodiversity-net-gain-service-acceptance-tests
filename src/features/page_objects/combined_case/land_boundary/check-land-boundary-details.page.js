const LandBoundaryCheckDetails = require('../../land_boundary/check-land-boundary-details.page')

class CombinedCaseLandBoundaryCheckDetails extends LandBoundaryCheckDetails {
  open () {
    return super.open('combined-case/check-land-boundary-details')
  }
}
module.exports = CombinedCaseLandBoundaryCheckDetails
