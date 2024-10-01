const DeveloperJourneyDevelopmentInformationPage = require("../../developer/development-project-information.page");

class CombinedCaseDeveloperJourneyDevelopmentInformationPage extends DeveloperJourneyDevelopmentInformationPage {
  get path() {
    return "combined-case/development-project-information";
  }

  open() {
    return super.open(this.path);
  }
}
module.exports = CombinedCaseDeveloperJourneyDevelopmentInformationPage;