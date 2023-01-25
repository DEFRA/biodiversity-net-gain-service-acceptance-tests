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
    await (checkYouCanRegisterPage.CovButton).click();
})

When("I confirm that my site is not in england", async () => {
    await ((siteInEnglandPage.radioNo)).click();
    await (siteInEnglandPage.CovButton).click();
})

When("I have answered yes to all eligibility questions", async () => {
    expect(await browser.getTitle()).toContain(siteInEnglandPage.titleText);

    await (siteInEnglandPage.radioYes).click();
    await (siteInEnglandPage.CovButton).click();

    expect(await browser.getTitle()).toContain(consentPage.titleText);

    await (consentPage.radioYes).click();
    await (consentPage.CovButton).click();

    expect(await browser.getTitle()).toContain(legalAgreementPage.titleText);

    await(legalAgreementPage.radioYes).click();
    await(legalAgreementPage.CovButton).click();

    expect(await browser.getTitle()).toContain(ownershipProofPage.titleText);

    await(ownershipProofPage.radioYes).click();
    await(ownershipProofPage.CovButton).click();

    expect(await browser.getTitle()).toContain(boundaryPage.titleText);

    await(boundaryPage.radioYes).click();
    await(boundaryPage.CovButton).click();

    expect(await browser.getTitle()).toContain(biodiversityMetricPage.titleText);

    await(biodiversityMetricPage.radioYes).click();
    await(biodiversityMetricPage.CovButton).click();

    expect(await browser.getTitle()).toContain(habitatManagementPlanPage.titleText);

    await(habitatManagementPlanPage.radioYes).click();
    await(habitatManagementPlanPage.CovButton).click();
})

When("I have answered no or not sure to some of the eligibility questions", async () => {
    expect(await browser.getTitle()).toContain(siteInEnglandPage.titleText);
    
    await (siteInEnglandPage.radioYes).click();
    await (siteInEnglandPage.CovButton).click();

    expect(await browser.getTitle()).toContain(consentPage.titleText);

    await (consentPage.radioNo).click();
    await (consentPage.CovButton).click();

    expect(await browser.getTitle()).toContain(legalAgreementPage.titleText);

    await(legalAgreementPage.radioYes).click();
    await(legalAgreementPage.CovButton).click();

    expect(await browser.getTitle()).toContain(ownershipProofPage.titleText);

    await(ownershipProofPage.radioNo).click();
    await(ownershipProofPage.CovButton).click();

    expect(await browser.getTitle()).toContain(boundaryPage.titleText);

    await(boundaryPage.radioYes).click();
    await(boundaryPage.CovButton).click();

    expect(await browser.getTitle()).toContain(biodiversityMetricPage.titleText);

    await(biodiversityMetricPage.radioNotSure).click();
    await(biodiversityMetricPage.CovButton).click();

    expect(await browser.getTitle()).toContain(habitatManagementPlanPage.titleText);

    await(habitatManagementPlanPage.radioYes).click();
    await(habitatManagementPlanPage.CovButton).click();

}) 

Then(/^I (?:am|should be) (?:on|returned to) the eligibility results page$/, async () => {
    await $("h1").waitForExist({ timeout: 5000 });

    // assert against the page title
    expect(await browser.getTitle()).toContain(resultsPage.dontHaveEverythingTitleText);

})