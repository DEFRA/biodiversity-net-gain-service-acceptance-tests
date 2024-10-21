const LandBoundaryAddHectares = require('../../land_boundary/add-hectares.page')

class CombinedCaseLandBoundaryAddHectares extends LandBoundaryAddHectares {
  open () {
    return super.open('combined-case/add-hectares')
  }
}
module.exports = CombinedCaseLandBoundaryAddHectares
