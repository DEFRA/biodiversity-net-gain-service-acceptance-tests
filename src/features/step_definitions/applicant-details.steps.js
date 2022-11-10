import { When, Then } from "@cucumber/cucumber";
import applicantDetailsNamePage from "../page_objects/applicant_details/name.page";
import applicantDetailsRolePage from "../page_objects/applicant_details/role.page";

When("I select other role", async () => {
    await (await applicantDetailsRolePage.other).click();
  }); 

When("I confirm my fullname or organisation as {string}", async (fullname) => {
    await applicantDetailsNamePage.fullName.addValue(fullname);
    await (await applicantDetailsNamePage.continueButton).click();
  });

  Then("I should be able to create a new role of {string}", async (option) => {
    (await applicantDetailsRolePage.otherRoleTextBox).addValue(option);
        await expect(applicantDetailsRolePage.otherRoleTextBox).toHaveValue(option);
  });


