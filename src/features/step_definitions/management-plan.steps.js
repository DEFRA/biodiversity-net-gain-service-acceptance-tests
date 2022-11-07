import { When, Then } from "@cucumber/cucumber";
import monitoringStartDatePage from "../page_objects/management_plan/monitoring-start-date.page";


Then("I should be able to enter a valid 30 year monitoring start date of {string}", async (date) => {

    var arr = date.split('/');

    await monitoringStartDatePage.Day.addValue(arr[0]);
    await monitoringStartDatePage.Month.addValue(arr[1]);
    await monitoringStartDatePage.Year.addValue(arr[2]);
    await (await monitoringStartDatePage.continueButton).click();
    await expect(monitoringStartDatePage.errorMsg).not.toBeDisplayed();
});