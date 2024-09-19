// const Page = require("../page");
const RegisterTasklistPage = require("../register-land-task-list.page")

class CombinedCaseTaskListPage extends RegisterTasklistPage {
  get titleText() {
    return "Register a biodiversity gain site and development project application";
  } 
  

  open() {
    return super.open("combined-case/tasklist");
  }
}
module.exports = new CombinedCaseTaskListPage();