const Page = require('../page')

class CombinedCaseMatchHabitatsPage extends Page {
  get titleText () {
    return 'Match type and area, or length, of habitat available for allocation on the biodiversity gain site'
  }

  get radioMatch1 () {
    return $("input[id='matchHabitats']")
  }

  get radioMatch2 () {
    return $("input[id='matchHabitats-2']")
  }

  open () {
    return super.open('combined-case/match-habitats')
  }
}
module.exports = CombinedCaseMatchHabitatsPage
