const { When, Then } = require("@wdio/cucumber-framework");
const TaskList = require("../page_objects/register-land-task-list.page");
const DeveloperTaskListPage = require("../page_objects/developer/tasklist.page");
const CreditsTaskListPage = require("../page_objects/credits-purchase/tasklist.page");

When ("I choose to add {string} details", async (task) => {
  const status = "NOT STARTED"

  switch (task) {
    case "applicant-info": {     
      await expect(TaskList.applicantInfoStatus).toHaveText(status);
      await TaskList.addApplicantInfo.click();  
    break;
    }
    case "land-ownership": {     
      await expect(TaskList.landOwnershipStatus).toHaveText(status);
      await TaskList.addLandOwnership.click();  
    break;
    }
    case "land-boundary": {
      await expect(TaskList.landBoundaryStatus).toHaveText(status);
      await TaskList.addLandBoundary.click();
    break;
  }
     case "metric": {
      await expect(TaskList.metricStatus).toHaveText(status);
      await TaskList.addMetric.click();
    break;
    }
    case "legal-agreement": {
      await expect(TaskList.legalAgreementStatus).toHaveText(status);
      await TaskList.addLegalAgreement.click();
    break;
    }
    case "local-land-charge": {
      await expect(TaskList.localLandChargeStatus).toHaveText(status);
      await TaskList.addLocallandCharge.click();
    break;
    }
    case "check-and-submit": {
      await expect(TaskList.submitStatus).toHaveText(status);
    break;
    }
    //Credits
    case "Statutory biodiversity metric": {
      expect(await browser.getTitle()).toContain(CreditsTaskListPage.titleText);
      await CreditsTaskListPage.uploadMetric.click();
    break;
    }

    case "Development Information": {
      expect(await browser.getTitle()).toContain(DeveloperTaskListPage.titleText);
      await DeveloperTaskListPage.addDevelopmentInformation.click();
    break;
    }

    case "Credits Development Information": {
      expect(await browser.getTitle()).toContain(CreditsTaskListPage.titleText);
      await CreditsTaskListPage.addDevelopmentInformation.click();
    break;
    }

    case "Statutory biodiversity credit": {
      expect(await browser.getTitle()).toContain(CreditsTaskListPage.titleText);
      await CreditsTaskListPage.addCredits.click();
    break;
    }
    case "Purchase Order": {
      expect(await browser.getTitle()).toContain(CreditsTaskListPage.titleText);
      await CreditsTaskListPage.addPurchaseOrder.click();
    break;
    }
    case "Customer due diligence": {
      expect(await browser.getTitle()).toContain(CreditsTaskListPage.titleText);
      await CreditsTaskListPage.addCustomerDueDiligence.click();
    break;
    }
    case "terms and conditions": {
      expect(await browser.getTitle()).toContain(CreditsTaskListPage.titleText);
      await CreditsTaskListPage.acceptTermsAndConditions.click();
    break;
    }
    default:{
      throw new Error(`Tasklist section ${task} doesn't exist`);
    } 
  }
});

When("I confirm I have completed all {string} journey sections", async (journey) => {
switch(journey){
  case "developer":{
    await expect(DeveloperTaskListPage.submitStatus).not.toHaveText("CANNOT START YET")
    await expect(DeveloperTaskListPage.submitStatus).toHaveText("NOT STARTED YET")

  await DeveloperTaskListPage.submitInformation.click();
  break;
  }
  case "landowner":{
    // check all section statuses 

    // /make sure cannot start status for the cya section has changed to not started yet
    await expect(TaskList.submitStatus).not.toHaveText("CANNOT START YET")
    await expect(TaskList.submitStatus).toHaveText("NOT STARTED YET")
    await (TaskList.checkAndSubmitBtn).click();
    break;
    }
    case "credits":{
      // check all section statuses 
  
      // /make sure cannot start status for the cya section has changed to not started yet
      await expect(CreditsTaskListPage.submitStatus).not.toHaveText("CANNOT START YET")
      await expect(CreditsTaskListPage.submitStatus).toHaveText("NOT STARTED YET")
      await (CreditsTaskListPage.checkAndSubmitBtn).click();
      break;
      }
    default:{
      throw new Error(`The journey entered ${journey} doesn't exist`);
    } 
}
});

Then("I should see my progress as {string}", async (value) => {
  await expect(TaskList.progressText).toHaveText(value) 
})

Then("I should see the {string} section status as {string}", async (task, status)  => {
 switch (task) {
    case "details": {
      await expect(TaskList.detailsStatus).toHaveText(status);
      break;
    } 
    case "land-ownership": {
      await expect(TaskList.landOwnershipStatus).toHaveText(status);
    break;
    }
    case "land-boundary": {
        await expect(TaskList.landBoundaryStatus).toHaveText(status);
      break;
    }
    case "metric": {
      await expect(TaskList.metricStatus).toHaveText(status);
    break;
    }
    case "legal-agreement": {
      await expect(TaskList.legalAgreementStatus).toHaveText(status);
    break;
    }
    case "local-land-charge": {
      await expect(TaskList.legalAgreementStatus).toHaveText(status);
    break;
    }
    case "check-and-submit": {
      await expect(TaskList.submitStatus).toHaveText(status);
    break;
    }
    //developer journey tasklist sections
    case "upload-metric-file": {
      await expect(DeveloperTaskListPage.uploadMetricFileStatus).toHaveText(status);
    break;
    }
    case "confirm development details": {
      await expect(TaskList.confirmDevelopmentDetailsStatus).toHaveText(status);
    break;
    }
    case "confirm off-site gain": {
      await expect(TaskList.confirmOffSiteGainStatus).toHaveText(status);
    break;
    }
    case "upload the consent document": {
      await expect(TaskList.uploadConsentDocumentStatus).toHaveText(status);
    break;
    }
    //credit purchase journey tasklist sections
    case "credits-purchase-metric": {
      expect(await browser.getTitle()).toContain(CreditsTaskListPage.titleText);
      await expect(CreditsTaskListPage.uploadMetricStatus).toHaveText(status);
    break;
    }
    case "add-credits": {
      await expect(CreditsTaskListPage.addCreditsStatus).toHaveText(status);
    break;
    }
    case "purchase-order": {
      await expect(CreditsTaskListPage.addPurhaseOrderStatus).toHaveText(status);
    break;
    }
    case "customer-due-diligence": {
      await expect(CreditsTaskListPage.addCustomerDueDiligenceStatus).toHaveText(status);
    break;
    }
    case "terms-and-conditions": {
      await expect(CreditsTaskListPage.acceptTermsAndConditionsStatus).toHaveText(status);
    break;
    }
    default:{
      throw new Error(`Tasklist section ${task} doesn't exist`);
    } 
  }
});