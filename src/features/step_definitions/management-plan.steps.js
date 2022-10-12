import { When, Then } from "@cucumber/cucumber";
import habitatWorksStartDatePage from "../page_objects/management_plan/habitat-works-start-date.page";
import monitoringStartDatePage from "../page_objects/management_plan/monitoring-start-date.page";


When("I enter a valid startdate of {string}", async (date) => {

    var arr = date.split('/');

    await habitatWorksStartDatePage.Day.addValue(arr[0]);
    await habitatWorksStartDatePage.Month.addValue(arr[1]);
    await habitatWorksStartDatePage.Year.addValue(arr[2]);
    await (await habitatWorksStartDatePage.continueButton).click();
});

Then("I should be able to enter a valid 30 year monitoring startdate of {string}", async (date) => {

    var arr = date.split('/');

    await monitoringStartDatePage.Day.addValue(arr[0]);
    await monitoringStartDatePage.Month.addValue(arr[1]);
    await monitoringStartDatePage.Year.addValue(arr[2]);
    await (await monitoringStartDatePage.continueButton).click();
    await expect(monitoringStartDatePage.errorMsg).not.toBeDisplayed();
});