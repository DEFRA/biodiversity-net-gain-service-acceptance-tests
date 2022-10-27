const Page = require("./page");

class TaskList extends Page {
  get LegalAgreementStatus() {
    // Todo: this is incorrect on v8 of the protototype... task list status ID's arn't unique
    // https://bng-prototype.herokuapp.com/register-application/v8/task-list
    return $("#biodiversity-metric-status");
  }

  get titleText() {
    return "Register land as a biodiversity gain site";
  }


  open() {
    return super.open("land/register-land-task-list");
  }
}
module.exports = new TaskList();
