const { Given, When, Then } = require("@wdio/cucumber-framework");
//**Credits Purchase Journey pages */
const addStatutoryBiodiversityCreditsPage = require("../page_objects/credits-purchase/add-statutory-biodiversity-credits.page");
const estimatedCostStatutoryBiodiversityCreditsPage = require("../page_objects/credits-purchase/estimated-cost-statutory-biodiversity-credits.page");
const creditsApplicationListPage = require("../page_objects/credits-purchase/credits-application-list.page");
const CreditsPurchaseTaskListPage = require("../page_objects/credits-purchase/tasklist.page.js");
const checkPurchaseOrderPage = require("../page_objects/credits-purchase/check-purchase-order.page.js");
const purchasingIndividualOrganisationPage = require("../page_objects/credits-purchase/purchasing-individual-organisation.page.js");
const creditsPurchaseCheckDefraAccountsPage = require("../page_objects/credits-purchase/check-defra-account-details.page.js");
const middleNamePage = require("../page_objects/credits-purchase/middle-name.page.js");
const dateOfBirthPage = require("../page_objects/credits-purchase/date-of-birth.page.js");
const nationalityPage = require("../page_objects/credits-purchase/nationality.page.js");
const confirmTermsAndConditionsPage = require("../page_objects/credits-purchase/confirm-terms-conditions.page.js");
const creditsCheckCutomerDueDiligencePage = require("../page_objects/credits-purchase/check-customer-due-diligence.page.js.js");
const developmentProjectInformationPage = require("../page_objects/credits-purchase/development-project-information.page.js");



When("I choose to start a new application", async () => {
     await creditsApplicationListPage.createNewCreditApplicationLink.click();
}) 


Given("I have completed the Development Information section", async () => {
     await completeAddDevelopmentInfoSection("Middlesbrough LPA", "1234", "New BNG Project");
}) 

Given("I have completed the Statutory biodiversity credits section", async () => {
     await completeAddCreditsSection("1", "£42,000");
})

Given("I have completed the Purchase Order section", async () => {
     await completePurchaseOrderSection("PONumber1234");
})

Given("I have completed the Customer due diligence section", async () => {
     await completeDueDiligenceSection("myMiddlename", "12/10/2022");
})

Given("I have completed the Terms and conditions section", async () => {
     
     expect(await browser.getTitle()).toContain(confirmTermsAndConditionsPage.titleText);
     await confirmTermsAndConditionsPage.termsAndConditionsCheckBox.click();
     await confirmTermsAndConditionsPage.continueButton.click();

     //tasklist confirm terms and conditions section shows as complete
     expect(await browser.getTitle()).toContain(CreditsPurchaseTaskListPage.titleText);
     await expect(CreditsPurchaseTaskListPage.acceptTermsAndConditionsStatus).toHaveText("COMPLETED");  

})


When("I add a value of {string} to the habitat {string}", async (value, unit) => {
     switch (unit) {
          case "A1": {
               await addStatutoryBiodiversityCreditsPage.habitatUnitA1.addValue(value);
               break;
          }
          case "A2": {
               await addStatutoryBiodiversityCreditsPage.habitatUnitA2.addValue(value);
               break;
          }
          case "A3": {
               await addStatutoryBiodiversityCreditsPage.habitatUnitA3.addValue(value);
               break;
          }
          case "A4": {
               await addStatutoryBiodiversityCreditsPage.habitatUnitA4.addValue(value);
               break;
          }
          case "A5": {
               await addStatutoryBiodiversityCreditsPage.habitatUnitA5.addValue(value);
               break;
          }
          case "H": {
               await addStatutoryBiodiversityCreditsPage.habitatUnitH.addValue(value);
               break;
          }
          case "W": {
               await addStatutoryBiodiversityCreditsPage.habitatUnitW.addValue(value);
               break;
          }
     }

     await addStatutoryBiodiversityCreditsPage.continueButton.click();

})

Then("I should see the estimated cost of {string} for the {string}", async (cost, unit) => {
     
     await $("h1").waitForExist();
     expect(await browser.getTitle()).toContain(estimatedCostStatutoryBiodiversityCreditsPage.titleText);

     switch (unit) {
          case "A1": {
               await expect(await estimatedCostStatutoryBiodiversityCreditsPage.unitCostA1).toHaveText(cost);
               break;
          }
          case "A2": {
               await expect(await estimatedCostStatutoryBiodiversityCreditsPage.unitCostA2).toHaveText(cost);
               break;
          }
          case "A3": {
               await expect(await estimatedCostStatutoryBiodiversityCreditsPage.unitCostA3).toHaveText(cost);
               break;
          }
          case "A4": {
               await expect(await estimatedCostStatutoryBiodiversityCreditsPage.unitCostA4).toHaveText(cost);
               break;
          }
          case "A5": {
               await expect(await estimatedCostStatutoryBiodiversityCreditsPage.unitCostA5).toHaveText(cost);
               break;
          }
          case "H": {
               await expect(await estimatedCostStatutoryBiodiversityCreditsPage.unitCostH).toHaveText(cost);
               break;
          }
          case "W": {
               await expect(await estimatedCostStatutoryBiodiversityCreditsPage.unitCostW).toHaveText(cost);
               break;
          }
     }
 })

Then("I should see the total estimated cost of {string}", async (value) => {
     await expect(await estimatedCostStatutoryBiodiversityCreditsPage.totalEstimatedCost).toHaveText(value);
}) 

Given(/^I add credits for my application/, function (table){
     console.log(table.rows());
});


async function completeAddDevelopmentInfoSection(lpa, applicationNumber, projectName) {
     expect(await browser.getTitle()).toContain(developmentProjectInformationPage.titleText);
     // add lpa 
     await developmentProjectInformationPage.localPlanningAuthority.addValue(lpa);
     //add planning reference
     await developmentProjectInformationPage.planningApplicationNumber.addValue(applicationNumber);
     //add development name
     await developmentProjectInformationPage.developmentName.addValue(projectName);

     developmentProjectInformationPage.continueButton.click()
     //tasklist add development information section shows as complete
     expect(await browser.getTitle()).toContain(developmentProjectInformationPage.titleText);
     await expect(CreditsPurchaseTaskListPage.addDevelopmentInformationStatus).toHaveText("COMPLETED");  


}

async function completeAddCreditsSection(credit, creditValue) {

     expect(await browser.getTitle()).toContain(addStatutoryBiodiversityCreditsPage.titleText);
     // When I add a value of "1" to the habitat "A1"
     await addStatutoryBiodiversityCreditsPage.habitatUnitA1.addValue(credit);
     await addStatutoryBiodiversityCreditsPage.continueButton.click();

     expect(await browser.getTitle()).toContain(estimatedCostStatutoryBiodiversityCreditsPage.titleText);
  
     await expect(await estimatedCostStatutoryBiodiversityCreditsPage.unitCostA1).toHaveText(creditValue);
     await estimatedCostStatutoryBiodiversityCreditsPage.continueButton.click();

     //tasklist add credits section shows as complete
     expect(await browser.getTitle()).toContain(CreditsPurchaseTaskListPage.titleText);
     await expect(CreditsPurchaseTaskListPage.addCreditsStatus).toHaveText("COMPLETED");  
}

async function completePurchaseOrderSection(value) {

     expect(await browser.getTitle()).toContain(checkPurchaseOrderPage.titleText);
     await checkPurchaseOrderPage.radioYes.click();
     await checkPurchaseOrderPage.purchaseOrderNumber.addValue(value);
     await checkPurchaseOrderPage.continueButton.click();

     //tasklist add po number section shows as complete
     expect(await browser.getTitle()).toContain(CreditsPurchaseTaskListPage.titleText);
     await expect(CreditsPurchaseTaskListPage.addPurhaseOrderStatus).toHaveText("COMPLETED");  
}

async function completeDueDiligenceSection(middleNameValue, dob) {

     expect(await browser.getTitle()).toContain(purchasingIndividualOrganisationPage.titleText);
     await purchasingIndividualOrganisationPage.radioIndividual.click();
     await purchasingIndividualOrganisationPage.continueButton.click();

     expect(await browser.getTitle()).toContain(creditsPurchaseCheckDefraAccountsPage.titleText);
     await creditsPurchaseCheckDefraAccountsPage.confirmDefraAccountDetailsChkBox.click();
     await creditsPurchaseCheckDefraAccountsPage.continueButton.click(); 

     expect(await browser.getTitle()).toContain(middleNamePage.titleText);
     await middleNamePage.radioYes.click();
     await middleNamePage.middleName.addValue(middleNameValue)
     await middleNamePage.continueButton.click();

     expect(await browser.getTitle()).toContain(dateOfBirthPage.titleText);
     

     ///// Todo ask for new general selectors instead of the specific ones and change this to the generic date function
     //await dateOfBirthPage.enterValidDate(dob)
     var arr = dob.split('/');
     //clear values
     await dateOfBirthPage.DOBDay.clearValue();
     await dateOfBirthPage.DOBMonth.clearValue();
     await dateOfBirthPage.DOBYear.clearValue();

     //add values
     await dateOfBirthPage.DOBDay.addValue(arr[0]);
     await dateOfBirthPage.DOBMonth.addValue(arr[1]);
     await dateOfBirthPage.DOBYear.addValue(arr[2]);
     await (await dateOfBirthPage.continueButton).click();

     //await dateOfBirthPage.continueButton.click();

     /////////////////////////////////////////////////

     expect(await browser.getTitle()).toContain(nationalityPage.titleText);
     await nationalityPage.nationality1.addValue("Albania");
     await nationalityPage.continueButton.click();

     //cya page
     expect(await browser.getTitle()).toContain(creditsCheckCutomerDueDiligencePage.titleText);
     await creditsCheckCutomerDueDiligencePage.continueButton.click();
     
     //tasklist add CDD section shows as complete
     expect(await browser.getTitle()).toContain(CreditsPurchaseTaskListPage.titleText);
     await expect(CreditsPurchaseTaskListPage.addCustomerDueDiligenceStatus).toHaveText("COMPLETED");  
}