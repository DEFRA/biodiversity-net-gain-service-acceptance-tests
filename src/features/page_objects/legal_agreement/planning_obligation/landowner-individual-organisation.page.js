// CD101 https://docs.google.com/document/d/1_icvMEgzDkJ63py6AlElUszFYvasuZeC/edit
const Page = require('../../page')

class LandownerIndividualOrganisationS106Page extends Page {
  get titleText () {
    return 'Is the landowner or leaseholder listed on the planning obligation (Section 106 agreement) an individual or an organisation?'
  }

  open () {
    return super.open('land/landowner-individual-organisation')
  }
}
module.exports = LandownerIndividualOrganisationS106Page
