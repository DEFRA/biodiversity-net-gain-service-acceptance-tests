const { Then } = require("@wdio/cucumber-framework");
const TaskList = require("../page_objects/register-land-task-list.page");


Then("I should see my progress as {string}", async (value) => {
  await expect(TaskList.progressText).toHaveTextContaining(value);
})


Then("I should see the {string} section status as {string}", async (task, status)  => {
    
  switch (task) {
    case "details": {
      await expect(TaskList.detailsStatus).toHaveTextContaining(status);
      break;
    } 
    case "land-boundary": {
        await expect(TaskList.landBoundaryStatus).toHaveTextContaining(status);
      break;
    }
    case "land-ownership": {
      await expect(TaskList.landOwnershipStatus).toHaveTextContaining(status);
    break;
    }
    case "metric": {
      await expect(TaskList.metricStatus).toHaveTextContaining(status);
    break;
    }
    case "hmmp": {
      await expect(TaskList.hmmpStatus).toHaveTextContaining(status);
    break;
    }
    case "legal-agreement": {
      await expect(TaskList.legalAgreementStatus).toHaveTextContaining(status);
    break;
    }
    case "check-and-submit": {
      await expect(TaskList.submitStatus).toHaveTextContaining(status);
    break;
    }
  }
});