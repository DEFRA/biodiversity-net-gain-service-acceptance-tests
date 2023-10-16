const { When, Then } = require("@wdio/cucumber-framework");
const TaskList = require("../page_objects/register-land-task-list.page");
const DeveloperTaskListPage = require("../page_objects/developer/tasklist.page");


When ("I choose to add {string} details", async (task) => {

  const status = "NOT STARTED"

  switch (task) {
    case "land-ownership": {     
      await expect(TaskList.landOwnershipStatus).toHaveTextContaining(status);
      await TaskList.addLandOwnership.click();  
    break;
    }
    case "land-boundary": {
      await expect(TaskList.landBoundaryStatus).toHaveTextContaining(status);
      await TaskList.addLandBoundary.click();
    break;
  }
     case "metric": {
      await expect(TaskList.metricStatus).toHaveTextContaining(status);
      await TaskList.addMetric.click();
    break;
    }
    case "management-plan": {
      await expect(TaskList.hmmpStatus).toHaveTextContaining(status);
      await TaskList.addHmmp.click();
    break;
    }
    case "legal-agreement": {
      await expect(TaskList.legalAgreementStatus).toHaveTextContaining(status);
      await TaskList.addLegalAgreement.click();
    break;
    }
    case "local-land-charge": {
      await expect(TaskList.localLandChargeStatus).toHaveTextContaining(status);
      await TaskList.addLocallandCharge.click();
    break;
    }
    case "check-and-submit": {
      await expect(TaskList.submitStatus).toHaveTextContaining(status);
    break;
    }
  }
});

When("I confirm I have completed all {string} sections", async (journey) => {
switch(journey){
  case "developer journey":{
    await expect(DeveloperTaskListPage.submitStatus).not.toHaveTextContaining("CANNOT START YET")
  await expect(DeveloperTaskListPage.submitStatus).toHaveTextContaining("NOT STARTED YET")

  await DeveloperTaskListPage.submitInformation.click();
  break;
  }
  case "landowner journey":{
    // check all section statuses 

    // /make sure cannot start status for the cya section has changed to not started yet
    await expect(TaskList.submitStatus).not.toHaveTextContaining("CANNOT START YET")
    await expect(TaskList.submitStatus).toHaveTextContaining("NOT STARTED YET")
    await (TaskList.checkAndSubmitBtn).click();
    break;
    }
    default:{
      throw new Error(`The journey entered ${journey} doesn't exist`);
    } 
}
});

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

    //developer journey tasklist sections
    case "Upload Metric 4.0 file": {
      await expect(TaskList.uploadMetricFileStatus).toHaveTextContaining(status);
    break;
    }

    case "confirm development details": {
      await expect(TaskList.confirmDevelopmentDetailsStatus).toHaveTextContaining(status);
    break;
    }

    case "confirm off-site gain": {
      await expect(TaskList.confirmOffSiteGainStatus).toHaveTextContaining(status);
    break;
    }

    case "upload the consent document": {
      await expect(TaskList.uploadConsentDocumentStatus).toHaveTextContaining(status);
    break;
    }
  }
});