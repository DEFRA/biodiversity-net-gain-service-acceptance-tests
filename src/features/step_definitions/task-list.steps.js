const { When, Then } = require("@wdio/cucumber-framework");
const RegisterTaskListPage = require("../page_objects/register-land-task-list.page");
const DeveloperTaskListPage = require("../page_objects/developer/tasklist.page");
const CreditsTaskListPage = require("../page_objects/credits-purchase/tasklist.page");
const CombinedCaseTaskListPage = require("../page_objects/combined_case/tasklist.page.js");
const TaskList = new RegisterTaskListPage();

When ("I choose to add {string} details", async (task) => {
  const status = "Not started"

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
    //Allocation
    case "biodiversity gain site information": {
      expect(await browser.getTitle()).toContain(DeveloperTaskListPage.titleText);
      await DeveloperTaskListPage.addBiodiversityGainSiteInfo.click();
    break;
    }
    case "developer-applicant-info": {
      expect(await browser.getTitle()).toContain(DeveloperTaskListPage.titleText);
      await DeveloperTaskListPage.addapplicantDetails.click();
    break;
    }
    case "Development Project": {
      expect(await browser.getTitle()).toContain(DeveloperTaskListPage.titleText);
      await DeveloperTaskListPage.addDevelopmentInformation.click();
    break;
    }
    case "planning decision notice": {
      expect(await browser.getTitle()).toContain(DeveloperTaskListPage.titleText);
      await DeveloperTaskListPage.addPlanningDecisionNoticeInfo.click();
    break;
    }
    // Combined case - reg
    case "combined-case-applicant-info": {     
      await expect(CombinedCaseTaskListPage.applicantInfoStatus).toHaveText(status);
      await CombinedCaseTaskListPage.addApplicantInfo.click();  
    break;
    }
    case "combined-case-land-ownership": {     
      await expect(CombinedCaseTaskListPage.landOwnershipStatus).toHaveText(status);
      await CombinedCaseTaskListPage.addLandOwnership.click();  
    break;
    }
    case "combined-case-land-boundary": {
      await expect(CombinedCaseTaskListPage.landBoundaryStatus).toHaveText(status);
      await CombinedCaseTaskListPage.addLandBoundary.click();
    break;
  }
     case "combined-case-metric": {
      await expect(CombinedCaseTaskListPage.metricStatus).toHaveText(status);
      await CombinedCaseTaskListPage.addMetric.click();
    break;
    }
    case "combined-case-legal-agreement": {
      await expect(CombinedCaseTaskListPage.legalAgreementStatus).toHaveText(status);
      await CombinedCaseTaskListPage.addLegalAgreement.click();
    break;
    }
    case "combined-case-local-land-charge": {
      await expect(CombinedCaseTaskListPage.localLandChargeStatus).toHaveText(status);
      await CombinedCaseTaskListPage.addLocallandCharge.click();
    break;
    }
    // Combined case - allocation
    
    
    
    
    case "combined-case-check-and-submit": {
      await expect(CombinedCaseTaskListPage.submitStatus).toHaveText(status);
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
    await expect(DeveloperTaskListPage.submitStatus).not.toHaveText("Cannot start yet")
    await expect(DeveloperTaskListPage.submitStatus).toHaveText("Not started yet")

  await DeveloperTaskListPage.devCheckAndSubmitBtn.click();
  break;
  }
  case "landowner":{
    // check all section statuses 

    // /make sure cannot start status for the cya section has changed to Not started yet
    await expect(TaskList.submitStatus).not.toHaveText("Cannot start yet")
    await expect(TaskList.submitStatus).toHaveText("Not started yet")
    await (TaskList.checkAndSubmitBtn).click();
    break;
    }
    case "credits":{
      // check all section statuses 
  
      // /make sure cannot start status for the cya section has changed to Not started yet
      await expect(CreditsTaskListPage.submitStatus).not.toHaveText("Cannot start yet")
      await expect(CreditsTaskListPage.submitStatus).toHaveText("Not started yet")
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
    case "biodiversity gain site information": {
      await expect(DeveloperTaskListPage.addBiodiversityGainSiteInfoStatus).toHaveText(status);
    break;
    }
    case "developer-applicant-info": {
      await expect(DeveloperTaskListPage.addapplicantDetailsStatus).toHaveText(status);
    break;
    }
    case "Development Project": {
      await expect(DeveloperTaskListPage.addDevelopmentInformationStatus).toHaveText(status);
    break;
    }
    case "planning decision notice": {
      await expect(DeveloperTaskListPage.addPlanningDecisionNoticeStatus).toHaveText(status);
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