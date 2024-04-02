const { Given, When, Then } = require('@wdio/cucumber-framework');
const applicantDetailsNamePage = require("../page_objects/applicant_details/name.page");
const applicantDetailsRolePage = require("../page_objects/applicant_details/role.page");
const applicantDetailsEmailPage = require("../page_objects/applicant_details/email.page");
const applicantDetailsCorrectEmailPage = require("../page_objects/applicant_details/correct-email.page");
const checkYourDetailsPage = require("../page_objects/applicant_details/check-your-details.page");


// Developer journey 
const developerApplicantDetailsNamePage = require("../page_objects/developer/details-name.page");
const developerApplicantDetailsEmailPage = require("../page_objects/developer/details-email.page");
const developerApplicantDetailsCorrectEmailPage = require("../page_objects/developer/details-email-confirm.page");
const developerCheckYourDetailsPage = require("../page_objects/developer/details-confirm.page");
const developerTaskListPage = require("../page_objects/developer/tasklist.page.js")

Given("I have completed the applicant details section", async () => {
  await completeApplicantDetailsSection("John Smith", "Landowner", "landowner@example.com");
})

Given("I have completed the applicant details section for my development", async () => {
  await completeApplicantDetailsSection("Christopher Wallace", "Developer", "developer@example.com");

  await expect(developerTaskListPage.detailsStatus).toHaveText("COMPLETED");
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

async function completeApplicantDetailsSection(fullname, journey, email) { 
      if(journey == "Developer") {
      await developerApplicantDetailsNamePage.addFullName(fullname);
      await developerApplicantDetailsEmailPage.addEmailAddress(email);

      // confirm on the correct email page
      await (developerApplicantDetailsCorrectEmailPage.radioYes).click();
      await (developerApplicantDetailsCorrectEmailPage.continueButton).click();

      // confirm on the cya page
      await (developerCheckYourDetailsPage.continueButton).click();
      // break;
    } else {
    //Landowner
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
}