//CD106 https://docs.google.com/document/d/18xH7zKHgqr8FcPfqoj5PiHBjf-zlzt3Q/edit
const Page = require("../../page");

class NeedAddAllLandownersS106Page extends Page {
  get titleText() {
    return "You need to add all landowners or leaseholders listed on the planning obligation (Section 106 agreement)";
  }

  open() {
    return super.open("land/need-add-all-landowners");
  }
}
module.exports = new NeedAddAllLandownersS106Page();