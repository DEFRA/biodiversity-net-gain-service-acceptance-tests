const Page = require("./base-page");

class TaskList extends Page {
  get LegalAgreementStatus() {
    // Todo: this is incorrect on v8 of the protototype... multiple
    return $("#biodiversity-metric-status");
  }

  open() {
    return super.open("task-list");
  }
}
module.exports = new TaskList();
