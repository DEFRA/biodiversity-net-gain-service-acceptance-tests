import { When, Then } from "@cucumber/cucumber";
import applicantDetailsNamePage from "../page_objects/applicant_details/name.page";
import applicantDetailsRolePage from "../page_objects/applicant_details/role.page";
import applicantDetailsEmailPage from "../page_objects/applicant_details/email.page";
import applicantDetailsCorrectEmailPage from "../page_objects/applicant_details/correct-email.page";

When("I select other role", async () => {
    await (await applicantDetailsRolePage.other).click();
  }); 

When(/^I confirm my "(.*)" (?:as|as a) "(.*)"$/, async (option, value) => {
  switch (option) {
    case "fullname": {
      await (applicantDetailsNamePage.fullName).clearValue();
      await applicantDetailsNamePage.fullName.addValue(value);
      await expect(applicantDetailsNamePage.fullName).toHaveValue(value);
      await (applicantDetailsNamePage.continueButton).click();
      break;
    }
    case "email address": {
      // clear value
      await (applicantDetailsEmailPage.emailAddress).clearValue();
      // add the email address
      await applicantDetailsEmailPage.emailAddress.addValue(value);
      await expect(applicantDetailsEmailPage.emailAddress).toHaveValue(value);
      await (applicantDetailsEmailPage.continueButton).click();
      // confirm on the correct email page
      await (applicantDetailsCorrectEmailPage.radioYes).click();
      await (applicantDetailsEmailPage.continueButton).click();
      break;
    }
  }
});

Then("I should be able to create a new role of {string}", async (value) => {
  (await applicantDetailsRolePage.otherRoleTextBox).addValue(value);
      await expect(applicantDetailsRolePage.otherRoleTextBox).toHaveValue(value);
      await (applicantDetailsRolePage.continueButton).click();
});


