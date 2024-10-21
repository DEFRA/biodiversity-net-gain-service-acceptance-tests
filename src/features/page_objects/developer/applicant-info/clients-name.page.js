const Page = require('../../page')

class DeveloperClientsNamePage extends Page {
  get titleText () {
    return "What is your client's name?"
  }

  get path () {
    return 'developer/clients-name'
  }

  open () {
    return super.open(this.path)
  }
}
module.exports = new DeveloperClientsNamePage()
