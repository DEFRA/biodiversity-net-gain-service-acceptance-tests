import { Given, Then } from "@cucumber/cucumber";
import checkManagementMonitoringDetailsPage from "../page_objects/management_plan/check-management-monitoring-details.page";
import monitoringStartDatePage from "../page_objects/management_plan/monitoring-start-date.page";
let  basePage = monitoringStartDatePage;


Given("I have completed the management-plan section", async () => {
    await completeManagementPlanSection("12/10/2022", "13/10/2022");
  })

Then("I should be able to enter a valid 30 year monitoring start date of {string}", async (date) => {
    await enter30YearMonitoringStartDate(date);
});

async function enter30YearMonitoringStartDate(date) {
    await basePage.enterValidDate(date);
    await expect(monitoringStartDatePage.errorMsg).not.toBeDisplayed();
}

async function completeManagementPlanSection(date, date2) { 
    // And I enter a valid "start" date of "<hmmp start date>"
    await basePage.enterValidDate(date);

    // And I enter a valid "30 year monitoring start" date of "<30 year monitor date>"
    await enter30YearMonitoringStartDate(date2);
    
    // confirm on the cya page
    await (checkManagementMonitoringDetailsPage.continueButton).click();
    
  }