const { Given, When, Then} = require("@wdio/cucumber-framework");
const biodiversityMetricPage = require("../page_objects/eligibility_questions/biodiversity-metric.page");
const boundaryPage = require("../page_objects/eligibility_questions/boundary.page");
const checkYouCanRegisterPage = require("../page_objects/eligibility_questions/check-you-can-register.page");
const consentPage = require("../page_objects/eligibility_questions/consent.page");
const habitatManagementPlanPage = require("../page_objects/eligibility_questions/habitat-management-plan.page");
const legalAgreementPage = require("../page_objects/eligibility_questions/legal-agreement.page");
const ownershipProofPage = require("../page_objects/eligibility_questions/ownership-proof.page");
const resultsPage = require("../page_objects/eligibility_questions/results.page");
const siteInEnglandPage = require("../page_objects/eligibility_questions/site-in-england.page");


Given("I have everything I need to start my biodiversity gain site registration", async () => {
    // skip elgibility questions 
    await (checkYouCanRegisterPage.skipQuestions).click();
})

Given("I choose to check that I have everything I need to register", async () => {
    // continue to elgibility questions 
    await (checkYouCanRegisterPage.eligibilityContinueButton).click();
})

When("I confirm that my site is not in england", async () => {
    await ((siteInEnglandPage.radioNo)).click();
    await (siteInEnglandPage.eligibilityContinueButton).click();
})

When("I have answered yes to all eligibility questions", async () => {
    expect(await browser.getTitle()).toContain(siteInEnglandPage.titleText);

    await (siteInEnglandPage.radioYes).click();
    await (siteInEnglandPage.eligibilityContinueButton).click();

    expect(await browser.getTitle()).toContain(consentPage.titleText);

    await (consentPage.radioYes).click();
    await (consentPage.eligibilityContinueButton).click();

    expect(await browser.getTitle()).toContain(legalAgreementPage.titleText);

    await(legalAgreementPage.radioYes).click();
    await(legalAgreementPage.eligibilityContinueButton).click();

    expect(await browser.getTitle()).toContain(ownershipProofPage.titleText);

    await(ownershipProofPage.radioYes).click();
    await(ownershipProofPage.eligibilityContinueButton).click();

    expect(await browser.getTitle()).toContain(boundaryPage.titleText);

    await(boundaryPage.radioYes).click();
    await(boundaryPage.eligibilityContinueButton).click();

    expect(await browser.getTitle()).toContain(biodiversityMetricPage.titleText);

    await(biodiversityMetricPage.radioYes).click();
    await(biodiversityMetricPage.eligibilityContinueButton).click();

    expect(await browser.getTitle()).toContain(habitatManagementPlanPage.titleText);

    await(habitatManagementPlanPage.radioYes).click();
    await(habitatManagementPlanPage.eligibilityContinueButton).click();
})

When("I have answered no or not sure to some of the eligibility questions", async () => {
    expect(await browser.getTitle()).toContain(siteInEnglandPage.titleText);
    
    await (siteInEnglandPage.radioYes).click();
    await (siteInEnglandPage.eligibilityContinueButton).click();

    expect(await browser.getTitle()).toContain(consentPage.titleText);

    await (consentPage.radioNo).click();
    await (consentPage.eligibilityContinueButton).click();

    expect(await browser.getTitle()).toContain(legalAgreementPage.titleText);

    await(legalAgreementPage.radioYes).click();
    await(legalAgreementPage.eligibilityContinueButton).click();

    expect(await browser.getTitle()).toContain(ownershipProofPage.titleText);

    await(ownershipProofPage.radioNo).click();
    await(ownershipProofPage.eligibilityContinueButton).click();

    expect(await browser.getTitle()).toContain(boundaryPage.titleText);

    await(boundaryPage.radioYes).click();
    await(boundaryPage.eligibilityContinueButton).click();

    expect(await browser.getTitle()).toContain(biodiversityMetricPage.titleText);

    await(biodiversityMetricPage.radioNotSure).click();
    await(biodiversityMetricPage.eligibilityContinueButton).click();

    expect(await browser.getTitle()).toContain(habitatManagementPlanPage.titleText);

    await(habitatManagementPlanPage.radioYes).click();
    await(habitatManagementPlanPage.eligibilityContinueButton).click();

}) 

Then(/^I (?:am|should be) (?:on|returned to) the eligibility results page$/, async () => {
    await $("h1").waitForExist({ timeout: 5000 });

    // assert against the page title
    expect(await browser.getTitle()).toContain(resultsPage.dontHaveEverythingTitleText);

})

Then("I should be shown what I need to provide.", async () => {
    return pending
})