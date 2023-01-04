import { Given, When, Then } from "@cucumber/cucumber";
import applicantDetailsNamePage from "../page_objects/applicant_details/name.page";
import applicantDetailsRolePage from "../page_objects/applicant_details/role.page";
import applicantDetailsEmailPage from "../page_objects/applicant_details/email.page";
import applicantDetailsCorrectEmailPage from "../page_objects/applicant_details/correct-email.page";
import checkYourDetailsPage from "../page_objects/applicant_details/check-your-details.page";

Given("I have completed the applicant details section", async () => {
  await completeApplicantDetailsSection("John Smith", "Landowner", "test@example.com");
})

When("I select other role", async () => {
    await (await applicantDetailsRolePage.other).click();
  }); 

When(/^I confirm my applicant "(.*)" (?:as|as a) "(.*)"$/, async (option, value) => {
  switch (option) {
    case "fullname": {
        await applicantDetailsNamePage.addFullName(value);
      break;
    }
    case "role": {
        await applicantDetailsRolePage.confirmRole(value);  
      break;
    }
    case "email address": {  
      await applicantDetailsEmailPage.addEmailAddress(value);

      // confirm on the correct email page
      await applicantDetailsCorrectEmailPage.confirmEmailAddress();
      break;
    }
  }
});

Then("I should be able to create a new role of {string}", async (value) => {
  (await applicantDetailsRolePage.otherRoleTextBox).addValue(value);
      await expect(applicantDetailsRolePage.otherRoleTextBox).toHaveValue(value);
      await (applicantDetailsRolePage.continueButton).click();
});

async function completeApplicantDetailsSection(fullname, role, email) {
  
  await applicantDetailsNamePage.addFullName(fullname);

  await applicantDetailsRolePage.confirmRole(role);
  
  await applicantDetailsEmailPage.addEmailAddress(email);

  // confirm on the correct email page
  // applicantDetailsCorrectEmailPage.confirmEmailAddress();
  await (applicantDetailsCorrectEmailPage.radioYes).click();
  await (applicantDetailsEmailPage.continueButton).click();

  // confirm on the cya page
  await (checkYourDetailsPage.continueButton).click();
}



