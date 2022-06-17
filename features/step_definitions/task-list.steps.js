const { Given, When, Then } = require("@wdio/cucumber-framework");
const TaskList = require("../page_objects/task-list");

Then(
  "I should see the {string} section status as {string}",
  async function (task, status) {
    // Todo: switch for the task - only one at the moment planning obligation/legal agreement
    // also the prototype version 8 has non unique ID's so not a good test right now

    //status = "incorrect";

    expect(await TaskList.LegalAgreementStatus).toHaveTextContaining(status);

    // expect(TaskList.LegalAgreementStatus).toEqual(
    //   expect.stringContaining(status)
    // );

    console.log("The status is: " + status);
  }
);
