const { Given, When, Then } = require('@wdio/cucumber-framework');
const startPage = require('../page_objects/start.page');
const checkYouCanRegisterPage = require('../page_objects/eligibility_questions/check-you-can-register.page');
const siteInEnglandPage = require('../page_objects/eligibility_questions/site-in-england.page');
const cannotContinuePage = require('../page_objects/eligibility_questions/cannot-continue.page');
const applicantDetailsNamePage = require('../page_objects/applicant_details/name.page');
const applicantDetailsRolePage = require('../page_objects/applicant_details/role.page');
const applicantDetailsEmailPage = require('../page_objects/applicant_details/email.page');
const applicantDetailsCorrectEmailPage = require('../page_objects/applicant_details/correct-email.page');
const applicantDetailsCheckYourDetailsPage = require('../page_objects/applicant_details/check-your-details.page');
const legalAgreementTypePage = require('../page_objects/legal_agreement/legal-agreement-type.page');
const legalAgreementNeedpage = require('../page_objects/legal_agreement/need-legal-agreement.page');
const legalAgreementUploadPage = require('../page_objects/legal_agreement/upload-legal-agreement.page');
const legalAgreementCheckFilePage = require('../page_objects/legal_agreement/check-legal-agreement-file.page');
const legalAgreementAddPartiesPage = require('../page_objects/legal_agreement/add-legal-agreement-parties.page');
const legalAgreementStartDatePage = require('../page_objects/legal_agreement/legal-agreement-start-date.page');
const legalAgreementCheckDetailsPage = require('../page_objects/legal_agreement/check-legal-agreement-details.page');
const managementPlanUploadPage = require('../page_objects/management_plan/management-plan-upload.page');
const managementPlanCheckPage = require('../page_objects/management_plan/management-plan-check.page');
const taskListPage = require('../page_objects/register-land-task-list.page');
const landBoundaryChooseUploadOptionPage = require('../page_objects/land_boundary/choose-land-boundary-upload.page');
const landBoundaryUploadImageFilePage = require('../page_objects/land_boundary/upload-land-boundary.page');
const landBoundaryUploadGeospatialFilePage = require('../page_objects/land_boundary/upload-geospatial-file.page');
const landBoundaryCheckImageFilePage = require('../page_objects/land_boundary/check-land-boundary-file.page');
const landBoundaryCheckGeospatialFilePage = require('../page_objects/land_boundary/check-geospatial-file.page')
const landBoundaryCheckImageDetailsPage = require('../page_objects/land_boundary/check-land-boundary-details.page');
const metricUploadPage = require('../page_objects/metric/metric-upload.page');
const metricCheckPage = require('../page_objects/metric/metric-check.page');
const metricDisplayBaselinePage = require('../page_objects/metric/check-habitat-baseline.page');
const landOwnershipUploadPage = require('../page_objects/land_ownership/land-ownership-upload.page');
const landOwnershipCheckPage = require('../page_objects/land_ownership/land-ownership-check.page');
const landownershipRegisteredLandownerPage = require('../page_objects/land_ownership/registered-landowner.page');
const landownershipAddLandowners = require('../page_objects/land_ownership/add-landowners.page');
const gridReferencePage = require('../page_objects/land_boundary/grid-reference.page');
const addHectaresPage = require('../page_objects/land_boundary/add-hectares.page');
const habitatWorksStartDatePage = require('../page_objects/management_plan/habitat-works-start-date.page');
const monitoringStartDatePage = require('../page_objects/management_plan/monitoring-start-date.page');
const resultsPage = require('../page_objects/eligibility_questions/results.page');
const managementMonitoringCheckDetailsPage = require('../page_objects/management_plan/check-management-monitoring-details.page');
const landOwnershipCheckDetailsPage = require('../page_objects/land_ownership/check-ownership-details.page');
const checkAndSubmitPage = require('../page_objects/check-and-submit.page');
const confirmationPage = require('../page_objects/registration-submitted.page');

const basePage = legalAgreementUploadPage;

const pages = {
  start: startPage,
  //eligibility questions
  'check-you-can-register': checkYouCanRegisterPage,
  'site-in-england': siteInEnglandPage,
  'cannot-continue': cannotContinuePage,
  'results': resultsPage,
  //applicant details
  'applicant-name': applicantDetailsNamePage,
  'role': applicantDetailsRolePage,
  'email': applicantDetailsEmailPage,
  'correct-email': applicantDetailsCorrectEmailPage,
  'check-your-details': applicantDetailsCheckYourDetailsPage,
  //legal agreement
  'legal-agreement-upload': legalAgreementUploadPage,
  'legal-agreement-check': legalAgreementCheckFilePage,
  'legal-agreement-type': legalAgreementTypePage,
  'need-legal-agreement': legalAgreementNeedpage,
  'add-legal-agreement-parties': legalAgreementAddPartiesPage,
  'legal-agreement-start-date': legalAgreementStartDatePage,
  'check-legal-agreement-details': legalAgreementCheckDetailsPage,
  //hmmp
  'management-plan-upload': managementPlanUploadPage,
  'management-plan-check': managementPlanCheckPage,
  'habitat-works-start-date': habitatWorksStartDatePage,
  'monitoring-start-date': monitoringStartDatePage,
  //Land boundary 
  'choose-land-boundary-upload': landBoundaryChooseUploadOptionPage,
  'land-boundary-upload': landBoundaryUploadImageFilePage,
  'geospatial-upload': landBoundaryUploadGeospatialFilePage,
  'check-geospatial-file': landBoundaryCheckGeospatialFilePage,
  'land-boundary-check': landBoundaryCheckImageFilePage,
  'geospatial-check': landBoundaryCheckGeospatialFilePage,
  'check-land-boundary-details': landBoundaryCheckImageDetailsPage,
  'grid-reference': gridReferencePage,
  'add-hectares': addHectaresPage,
  //metric
  'metric-upload': metricUploadPage,
  'metric-check': metricCheckPage,
  'metric-display-baseline': metricDisplayBaselinePage,
  //land ownership
  'land-ownership-upload': landOwnershipUploadPage,
  'land-ownership-check': landOwnershipCheckPage,
  'registered-landowner': landownershipRegisteredLandownerPage,
  'add-landowners': landownershipAddLandowners,
  //task-list
  'register-land-task-list': taskListPage,
  //summary
  'check-and-submit': checkAndSubmitPage,
  //Confirmation
  'registration-submitted': confirmationPage
};

Given('I have completed the land-boundary section', async () => {
  await completeLandBoundarySection('fileType', 'TL6233', '1231.11');
})

async function completeLandBoundarySection(fileType, gridreference, hectares) {
  // And I choose and upload a 'land-boundary' file
  //       And I confirm it is the correct file
  //       And I add a valid grid reference '<grid reference>'
  //       And I add total hectares as '<hectares>'
  //       And I confirm the check 'land boundary' details are correct
  await gridReferencePage.addGridReference(gridreference);
  await addHectaresPage.addHectares(hectares);
  
  // confirm on the cya page
  await (landBoundaryCheckImageDetailsPage.continueButton).click();
  
}

When('I add a valid grid reference {string}', async (gridreference) => {
  await gridReferencePage.addGridReference(gridreference);
});

When('I add an invalid grid reference {string}', async (gridreference) => {
  await (await gridReferencePage.getGridRef).clearValue();
  await gridReferencePage.getGridRef.addValue(gridreference);
  await (await gridReferencePage.continueButton).click();
  await expect(gridReferencePage.errorMsg).toBeDisplayed();
});

When('I add total hectares as {string}', async (value) => {
  await addHectaresPage.addHectares(value);
});

Then(/^I choose to upload (?:a|an) '(.*)' file$/, async (fileType) => {
    await landBoundaryChooseUploadOptionPage.chooseLandboundaryFileType(fileType);
  }
);

Then('I should see the map displayed on the {string} page', async (page) =>{

// open the page requested from the list of pages
page = page.toLowerCase();
await pages[page].open();

await $('h1').waitForExist({ timeout: 5000 });

// assert against the page title
expect(await browser.getTitle()).toContain(pages[page].titleText);

// check your on the right page
// is the map showing

});