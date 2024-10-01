const { Given, When, Then } = require("@wdio/cucumber-framework");
// Import all page objects
const pages = require("../page_objects/page_objects");

Given(/^I navigate to the "(.*)" page$/, async (page) => {
  page = page.toLowerCase();

  if (page == "legal-agreement-upload") {
    await pages["legal-agreement-type"].open();
    await pages["legal-agreement-type"].conservationCovenant.click();
    await pages["legal-agreement-type"].continueButton.click();
    await pages["need-add-all-legal-files"].continueButton.click();
  } else {
    await pages[page].open();
  }

  // assert against the page title
  await $("h1").waitForExist();
  expect(await browser.getTitle()).toContain(pages[page].titleText);
});

Given("I try to navigate to the {string} page", async (path) => {
  const pageUrl = browser.options.baseUrl + path;
  console.log(`Navigating to: ${pageUrl}`);
  await browser.url(pageUrl);
});

Given("I have completed the {string} Development Information section", async (journey) => {
  await completeAddDevelopmentInfoSection("Middlesbrough LPA", "1234", "New BNG Project", journey);
}) 

When(/^I (?:am|should be) (?:shown|on|returned to) the "(.*)" page$/, async (page) => {
  if (page === "404") {
    expect(await browser.getTitle()).toContain("Page not found");
  } else {
    await $("h1").waitForExist({ timeout: 5000 });
    expect(await browser.getTitle()).toContain(pages[page].titleText);
  }
});

When("I continue without an action", async () => {
  await pages["legal-agreement-upload"].continueButton.click();
});

When("I upload without choosing a file", async () => {
  await pages["legal-agreement-upload"].uploadButton.click();
});

When("I go back to the previous page", async () => {
  await pages["legal-agreement-upload"].backButton.click();
});

When("I refresh the page", async () => {
  await browser.execute(() => {
    window.foobar = 'not refreshed yet';
  });
  expect(await browser.execute(() => window.foobar)).toBe('not refreshed yet');
  await browser.refresh();
  await browser.pause(200); // Wait for page refresh
  expect(await browser.execute(() => window.foobar)).toBe(null);
});

When("I select {string} and continue", async (option) => {
  switch (option) {
    case "Conservation covenant":
      await pages["legal-agreement-type"].conservationCovenant.click();
      await pages["legal-agreement-type"].continueButton.click();
      break;
    case "Planning obligation":
      await pages["legal-agreement-type"].planningObligation.click();
      await pages["legal-agreement-type"].continueButton.click();
      break;
    case "I do not have a legal agreement":
      await pages["legal-agreement-type"].doNotHaveLegalDocument.click();
      break;
    case "Other role":
      await pages["add-legal-agreement-parties"].otherLegalPartyRoleOption.click();
      await pages["add-legal-agreement-parties"].continueButton.click();
      break;
    default:
      throw new Error(`Option ${option} doesn't exist`);
  }
});

When("I confirm my role as a {string}", async (role) => {
  await pages["role"].confirmRole(role);
});

When("I confirm the {string} information is correct", async (check) => {
  switch (check) {
    case "applicant":
      await confirmApplicantDetails();
      break;
    case "land boundary":
      await confirmLandBoundaryDetails();
      break;
    case "land ownership":
      await confirmLandOwnershipDetails();
      break;
    case "check-habitat-baseline":
      await confirmMetricBaselineDetails();
      break;
    case "check-habitat-creation":
      await confirmMetricHabitatCreationDetails();
      break;
    case "check-metric-details":
      await checkMetricDetails();
      break;
    case "management plan":
      await confirmManagementPlanDetails();
      break;
    case "legal agreement":
      await confirmLegalAgreementDetails();
      break;
    case "development-details":
      expect(await browser.getTitle()).toContain(pages["credits-purchase-check-and-submit"].titleText);
      await pages["credits-purchase-check-and-submit"].radioYes.click();
      await pages["credits-purchase-check-and-submit"].continueButton.click();
      break;
    default:
      throw new Error(`Section ${check} doesn't exist`);
  }
});

Then("The page title should be {string}", async (pageTitle) => {
  expect(await browser.getTitle()).toContain(pageTitle);
});

async function confirmLegalAgreementDetails() {
  await pages["check-legal-agreement-details"].acceptBtn.waitForExist();
  await pages["check-legal-agreement-details"].acceptBtn.click();
}

When("I enter a start date of {string}", async (date) => {
  await pages["legal-agreement-upload"].enterValidDate(date);
});

When("I choose to change the {string} answer on the {string} page", async (option, page) => {
  const pageKey = page.toLowerCase().replace(/\s/g, '-'); // Transform page name into the correct key format

  switch (option) {
    case "fullname":
      await pages[pageKey].changeFullname.click();
      break;
    case "role":
      await pages[pageKey].changeRole.click();
      break;
    case "email address":
      await pages[pageKey].changeEmail.click();
      break;
    default:
      throw new Error(`Section ${option} doesn't exist`);
  }
});

When("I update the {string} to {string}", async (option, value) => {
  switch (option) {
    case "fullname":
      await pages["applicant-name"].fullName.clearValue();
      await pages["applicant-name"].fullName.addValue(value);
      await pages["legal-agreement-upload"].continueButton.click();
      break;
    case "role":
      await pages["role"].changeRole.click();
      await pages["legal-agreement-upload"].continueButton.click();
      break;
    case "email address":
      await pages["email"].addEmailAddress(value);
      await pages["correct-email"].radioYes.click();
      await pages["correct-email"].continueButton.click();
      break;
    default:
      throw new Error(`Page ${option} doesn't exist`);
  }
});

When("I add another {string} as {string} and confirm", async (option, value) => {
  if (option === "legal party") {
    await pages["add-legal-agreement-parties"].addAnotherLegalParty.click();
    await pages["add-legal-agreement-parties"].legalPartyFullName2.addValue(value);
    await pages["add-legal-agreement-parties"].legalPartyRole2.click();
    await pages["legal-agreement-upload"].continueButton.click();
  }
});

Then("I should see the error {string}", async (message) => {
  await pages["legal-agreement-upload"].errorMsg.waitForExist();
  await expect(pages["legal-agreement-upload"].errorMsg).toHaveTextContaining(message);
});

Then("I should see the error and the error summary displayed", async () => {
  await expect(pages["legal-agreement-upload"].errorMsg).toBeDisplayed();
  await expect(pages["legal-agreement-upload"].errorMsgSummary).toBeDisplayed();
});

Then("I should not see an error message displayed", async () => {
  await expect(pages["legal-agreement-upload"].errorMsg).not.toBeDisplayed();
  await expect(pages["legal-agreement-upload"].errorMsgSummary).not.toBeDisplayed();
});

Then("the other role value should not be {string}", async (input) => {
  await expect(pages["legal-agreement-upload"].otherRoleTextBox).not.toHaveValue(input);
});

Then("I can remove the other {string}", async (option) => {
  if (option === "legal party") {
    await pages["legal-party-list"].removeLegalParty1.click();
    await pages["legal-party-remove"].radioYes.click();
    await pages["legal-party-remove"].continueButton.click();
    await expect(pages["legal-party-list"].removeLegalParty1).not.toExist();
  }
});

Then(/^I should see the "(.*)" (?:shown as|updated to) "(.*)" on the "(.*)" page$/, async (option, value, page) => {
  const pageKey = page.toLowerCase().replace(/\s/g, '-');
  switch (pageKey) {
    case "check-your-details":
      switch (option) {
        case "fullname":
          await expect(pages[pageKey].fullnameValue).toHaveText(value);
          break;
        case "role":
          await expect(pages[pageKey].roleValue).toHaveText(value, { ignoreCase: true, asString: true });
          break;
        case "email address":
          await expect(pages[pageKey].emailValue).toHaveText(value);
          break;
      }
      break;
    case "check-legal-agreement-details":
      if (option === "parties involved") {
        await expect(pages[pageKey].legalPartiesValue).toHaveText(value);
      }
      break;
    case "check-and-submit":
      if (option === "fullname") {
        await expect(pages[pageKey].fullnameValue).toHaveText(value);
      }
      break;
    default:
      throw new Error(`Page ${pageKey} doesn't exist`);
  }
});

async function confirmLandOwnershipDetails() {
  await pages["land-ownership-check"].continueButton.waitForExist();
  await pages["land-ownership-check"].continueButton.click();
}

async function checkMetricDetails() {
  await pages["check-metric-details"].continueButton.waitForExist();
  await pages["check-metric-details"].continueButton.click();
}

async function confirmMetricBaselineDetails() {
  await pages["check-habitat-baseline"].continueButton.waitForExist();
  await pages["check-habitat-baseline"].continueButton.click();
}

async function confirmMetricHabitatCreationDetails() {
  await pages["check-habitat-created"].continueButton.waitForExist();
  await pages["check-habitat-created"].continueButton.click();
}

async function confirmManagementPlanDetails() {
  await pages["check-management-monitoring-details"].continueButton.waitForExist();
  await pages["check-management-monitoring-details"].continueButton.click();
}

async function confirmLandBoundaryDetails() {
  await pages["check-land-boundary-details"].continueButton.waitForExist();
  await pages["check-land-boundary-details"].continueButton.click();
}

async function confirmApplicantDetails() {
  await pages["check-your-details"].continueButton.waitForExist();
  await expect(pages["check-your-details"].fullnameValue).not.toBeNull();
  await expect(pages["check-your-details"].roleValue).not.toBeNull();
  await expect(pages["check-your-details"].emailValue).not.toBeNull();
  await pages["check-your-details"].continueButton.click();
}

async function completeAddDevelopmentInfoSection(lpa, applicationNumber, projectName, journey) {
  switch (journey) {
       case "credits": {
            expect(await browser.getTitle()).toContain(pages["credits-development-project-information"].titleText);
            // add lpa 
            await pages["credits-development-project-information"].localPlanningAuthority.addValue(lpa);
            //add planning reference
            await pages["credits-development-project-information"].planningApplicationNumber.addValue(applicationNumber);
            //add development name
            await pages["credits-development-project-information"].developmentName.addValue(projectName);

            await pages["credits-development-project-information"].continueButton.click()
            //tasklist add development information section shows as complete
            expect(await browser.getTitle()).toContain(pages["credits-purchase-task-list"].titleText);
            await expect(pages["credits-purchase-task-list"].addDevelopmentInformationStatus).toHaveText("Completed");  

            break;
       }
       case "allocation": {
            expect(await browser.getTitle()).toContain(pages["development-project-details"].titleText);
            // add lpa 
            await pages["development-project-details"].localPlanningAuthority.addValue(lpa);
            //add planning reference
            await pages["development-project-details"].planningApplicationNumber.addValue(applicationNumber);
            //add development name
            await pages["development-project-details"].developmentName.addValue(projectName);

            await pages["development-project-details"].continueButton.click()
            //tasklist add development information section shows as complete
            expect(await browser.getTitle()).toContain(pages["developer/tasklist"].titleText);
            // await pages["developer/tasklist"].addDevelopmentInformationStatus.waitForExist({ timeout: 5000 });
            await expect( pages["developer/tasklist"].addDevelopmentInformationStatus).toHaveText("Completed"); 
            break;
       }
       case "combined-case":{
          expect(await browser.getTitle()).toContain(pages["development-project-details"].titleText);
          // add lpa 
          await pages["combined-case-project-details"].localPlanningAuthority.addValue(lpa);
          //add planning reference
          await pages["combined-case-project-details"].planningApplicationNumber.addValue(applicationNumber);
          //add development name
          await pages["combined-case-project-details"].developmentName.addValue(projectName);

          await pages["combined-case-project-details"].continueButton.click()
          //tasklist add development information section shows as complete
          expect(await browser.getTitle()).toContain(pages["combined-case/tasklist"].titleText);
          await expect( pages["combined-case/tasklist"].addDevelopmentInformationStatus).toHaveText("Completed"); 
          break;
       }
       default:{
            throw new Error("Journey "+ journey +" doesn't exist");
          }
  }

}

