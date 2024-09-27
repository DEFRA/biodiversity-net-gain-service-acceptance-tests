// Import page object classes and instantiate them immediately
const ManageBngPage = require("./manage-biodiversity-gains.page.js");
const BiodiversityGainSitesPage = require("./biodiversity-gain-sites.page");
const CheckYouCanRegisterPage = require("./eligibility_questions/check-you-can-register.page");
const SiteInEnglandPage = require("./eligibility_questions/site-in-england.page");
const CannotContinuePage = require("./eligibility_questions/cannot-continue.page");
const ApplicantDetailsNamePage = require("./applicant_details/name.page");
// const ApplicantDetailsRolePage = require("./applicant_details/role.page");
// const ApplicantDetailsEmailPage = require("./applicant_details/email.page");
const ApplicantDetailsCorrectEmailPage = require("./applicant_details/correct-email.page");
const ApplicantDetailsCheckYourDetailsPage = require("./applicant_details/check-your-details.page");
const UploadWrittenAuthorisationPage = require("./applicant_info/upload-written-authorisation.page.js");
const CheckApplicantInfoPage = require("./applicant_info/check-applicant-information.page.js");
const LegalAgreementTypePage = require("./legal_agreement/legal-agreement-type.page");
const LegalAgreementNeedPage = require("./legal_agreement/need-legal-agreement.page");
const NeedAddAllLegalFilesPage = require("./legal_agreement/planning_obligation/need-add-all-legal-files.page.js");
const NeedAddAllLegalFilesCCPage = require("./legal_agreement/conservation_covenant/need-add-all-legal-files-cc.page.js");
const LegalAgreementUploadPage = require("./legal_agreement/conservation_covenant/upload-legal-agreement-cc.page");
const LegalAgreementCCUploadPage = require("./legal_agreement/conservation_covenant/upload-legal-agreement-cc.page");
const LegalAgreementCheckFilePage = require("./legal_agreement/check-legal-agreement-file.page");
const LegalAgreementCheckFileCCPage = require("./legal_agreement/conservation_covenant/check-legal-agreement-file-cc.page");
const LegalPartyListPage = require("./legal_agreement/legal-party-list.page");
const LegalAgreementAddPartiesPage = require("./legal_agreement/add-legal-agreement-parties.page");
const LegalAgreementStartDatePage = require("./legal_agreement/legal-agreement-start-date.page");
const LegalAgreementCheckDetailsPage = require("./legal_agreement/check-legal-agreement-details.page");
const LegalAgreementAnyOtherLandownersPage = require("./legal_agreement/any-other-landowners.page.js");
const ManagementPlanUploadPage = require("./management_plan/management-plan-upload.page");
const ManagementPlanCheckPage = require("./management_plan/management-plan-check.page");
const RegisterTaskListPage = require("./register-land-task-list.page");
const LandBoundaryChooseUploadOptionPage = require("./land_boundary/choose-land-boundary-upload.page");
const LandBoundaryUploadImageFilePage = require("./land_boundary/upload-land-boundary.page");
const LandBoundaryUploadGeospatialFilePage = require("./land_boundary/upload-geospatial-file.page");
const LandBoundaryCheckImageFilePage = require("./land_boundary/check-land-boundary-file.page");
const LandBoundaryCheckGeospatialFilePage = require("./land_boundary/check-geospatial-file.page");
const LandBoundaryCheckImageDetailsPage = require("./land_boundary/check-land-boundary-details.page");
const MetricUploadPage = require("./metric/metric-upload.page");
const MetricCheckPage = require("./metric/metric-check.page");
const MetricDisplayBaselinePage = require("./metric/check-habitat-baseline.page");
const MetricDisplayHabitatCreationPage = require("./metric/check-habitat-created.page");
const MetricCheckDetailsPage = require("./metric/check-metric-details.page");
const LandOwnershipUploadPage = require("./land_ownership/land-ownership-upload.page");
const LandOwnershipCheckPage = require("./land_ownership/land-ownership-check.page");
const LandownershipRegisteredLandownerPage = require("./land_ownership/registered-landowner.page");
const GridReferencePage = require("./land_boundary/grid-reference.page");
const AddHectaresPage = require("./land_boundary/add-hectares.page");
const MonitoringStartDatePage = require("./management_plan/monitoring-start-date.page");
// const ResultsPage = require("./eligibility_questions/results.page");
const ManagementMonitoringCheckDetailsPage = require("./management_plan/check-management-monitoring-details.page");
const LandOwnershipCheckDetailsPage = require("./land_ownership/check-ownership-details.page");
const CheckAndSubmitPage = require("./check-and-submit.page");
const ConfirmationPage = require("./application-submitted.page");
const LocalLandChargeUploadPage = require("./local_land_charge/upload-local-land-charge.page");
const LocalLandChargeCheckPage = require("./local_land_charge/check-local-land-charge.page");
const LocalLandChargeNeedPage = require("./local_land_charge/need-local-land-charge.page");
const LegalPartyRemovePage = require("./legal_agreement/legal-party-remove.page");

// Developer Journey pages
const DeveloperStartPage = require("./developer/routing-register.page");
const DeveloperTaskListPage = require("./developer/tasklist.page");
const DeveloperMetricUploadPage = require("./developer/upload-metric-file.page");
const DeveloperCheckAnswersPage = require("./developer/check-answers.page");
const DeveloperDetailsName = require("./developer/details-name.page");
const DevelopmentInformationPage = require("./developer/development-project-information.page.js");
const CheckDeveloperMetricFilePage = require("./developer/check-metric-file.page.js");
const UploadPlanningDecisionNoticePage = require("../page_objects/developer/upload-planning-decision-notice.page");
const CheckPlanningDecisionNoticePage = require("../page_objects/developer/upload-planning-decision-notice-check.page");

// Credits Purchase Journey pages
const AddStatutoryBiodiversityCreditsPage = require("./credits-purchase/add-statutory-biodiversity-credits.page");
const EstimatedCostStatutoryBiodiversityCreditsPage = require("./credits-purchase/estimated-cost-statutory-biodiversity-credits.page");
const UploadMetricFilePage = require("./credits-purchase/upload-metric-file.page.js");
const CreditsDevelopmentInformationPage = require("./credits-purchase/development-project-information.page.js");
const CreditsPurchaseTaskListPage = require("./credits-purchase/tasklist.page.js");
const CreditsPurchaseConfirmDevelopmentDetailsPage = require("./credits-purchase/confirm-development-details.page.js");
const CreditsPurchaseCheckAndSubmitPage = require("./credits-purchase/check-and-submit.page.js");
const CreditsPurchaseApplicationSubmittedPage = require("./credits-purchase/application-submitted.page.js");
const CreditsPurchaseApplicationListPage = require("./credits-purchase/check-statutory-biodiversity-credits.page.js");
const CheckCreditsPurchaseMetricFilePage = require("./credits-purchase/check-metric-file.page.js");

// Combined Case Journey pages
const CombinedCaseTaskListPage = require("./combined_case/tasklist.page.js");
const CombinedCaseApplicationListPage = require("./combined_case/combined-case-projects.page.js");
const CombinedCaseCheckApplicantInfoPage = require("./combined_case/applicant_info/check-applicant-information.page.js");
const CombinedCaseUploadWrittenAuthorisationPage = require("./combined_case/applicant_info/upload-written-authorisation.page.js");
const CombinedCaseCheckWrittenAuthorisationPage = require("./combined_case/applicant_info/check-written-authorisation-file.page.js");
const CombinedCaseLandOwnershipUploadPage = require("./combined_case/land_ownership/land-ownership-upload.page.js");
const CombinedCaseLandOwnershipCheckPage = require("./combined_case/land_ownership/land-ownership-check.page.js");

// Instantiate the objects
module.exports = {
   //Dashboard
  "manage-biodiversity-gains": new ManageBngPage(),
  "biodiversity-gain-sites": new BiodiversityGainSitesPage(),
  //eligibility questions
  "check-you-can-register": new CheckYouCanRegisterPage(),
  "site-in-england": new SiteInEnglandPage(),
  "cannot-continue": new CannotContinuePage(),
  // "results": new ResultsPage(),
  //applicant details
  "applicant-name": new ApplicantDetailsNamePage(),
  // "role": new ApplicantDetailsRolePage(),
  // "email": new ApplicantDetailsEmailPage(),
  "correct-email": new ApplicantDetailsCorrectEmailPage(),
  "check-your-details": new ApplicantDetailsCheckYourDetailsPage(),
  //applicant info
  "written-authorisation-upload": new UploadWrittenAuthorisationPage(),
  "check-applicant-info": new CheckApplicantInfoPage(),
  //land ownership
  "land-ownership-upload": new LandOwnershipUploadPage(),
  "land-ownership-check": new LandOwnershipCheckPage(),
  "registered-landowner": new LandownershipRegisteredLandownerPage(),
  //Land boundary 
  "choose-land-boundary-upload": new LandBoundaryChooseUploadOptionPage(),
  "land-boundary-upload": new LandBoundaryUploadImageFilePage(),
  "geospatial-upload": new LandBoundaryUploadGeospatialFilePage(),
  "check-geospatial-file": new LandBoundaryCheckGeospatialFilePage(),
  "land-boundary-check": new LandBoundaryCheckImageFilePage(),
  "check-land-boundary-details": new LandBoundaryCheckImageDetailsPage(),
  "grid-reference": new GridReferencePage(),
  "add-hectares": new AddHectaresPage(),
  //metric
  "metric-upload": new MetricUploadPage(),
  "metric-check": new MetricCheckPage(),
  "check-habitat-baseline": new MetricDisplayBaselinePage(),
  "check-habitat-created": new MetricDisplayHabitatCreationPage(),
  "check-metric-details": new MetricCheckDetailsPage(),
  //hmmp
  "management-plan-upload": new ManagementPlanUploadPage(),
  "management-plan-check": new ManagementPlanCheckPage(),
  "monitoring-start-date": new MonitoringStartDatePage(),
  "check-management-monitoring-details": new ManagementMonitoringCheckDetailsPage(),
  //legal agreement
  "legal-agreement-upload": new LegalAgreementUploadPage(),
  "legal-agreement-cc-upload": new LegalAgreementCCUploadPage(),
  "legal-agreement-check": new LegalAgreementCheckFileCCPage(),
  "legal-agreement-type": new LegalAgreementTypePage(),
  "need-add-all-legal-files": new NeedAddAllLegalFilesPage(),
  "need-add-all-legal-files-cc": new NeedAddAllLegalFilesCCPage(),
  "need-legal-agreement": new LegalAgreementNeedPage(),
  "add-legal-agreement-parties": new LegalAgreementAddPartiesPage(),
  "legal-party-list": new LegalPartyListPage(),
  "legal-agreement-start-date": new LegalAgreementStartDatePage(),
  "check-legal-agreement-details": new LegalAgreementCheckDetailsPage(),
  "check-legal-agreement-cc-details": new LegalAgreementCheckFileCCPage(),
  "any-other-landowners": new LegalAgreementAnyOtherLandownersPage(),
  //Local land Charge search certificate
  "local-land-charge-upload": new LocalLandChargeUploadPage(),
  "local-land-charge-check": new LocalLandChargeCheckPage(),
  "need-local-land-charge": new LocalLandChargeNeedPage(),
   // task-list
  "register-land-task-list": new RegisterTaskListPage(),
   //// tasklist sections
   "land-ownership" : new LandOwnershipUploadPage(),
   "land-boundary" : new LandBoundaryUploadImageFilePage(),
   "metric": new MetricUploadPage(),
   "management-plan": new ManagementPlanUploadPage(),
   "legal-agreement": new LegalAgreementTypePage(),
   "local-land-charge": new LocalLandChargeUploadPage(),
    //summary
  "check-and-submit": new CheckAndSubmitPage(),
    //Confirmation
  "application-submitted": new ConfirmationPage(),

  // Developer Journey
  "routing-register": new DeveloperStartPage(),
  "developer/tasklist": new DeveloperTaskListPage(),
  "developer-metric-upload": new DeveloperMetricUploadPage(),
  "check-developer-metric-file": new CheckDeveloperMetricFilePage(),
  "check-answers": new DeveloperCheckAnswersPage(),
  "developer-details-name": new DeveloperDetailsName(),
  "development-project-details": new DevelopmentInformationPage(),
  "upload-planning-decision-notice": new UploadPlanningDecisionNoticePage(),
  "check-planning-decision-notice-file": new CheckPlanningDecisionNoticePage(),

  // Credits Purchase Journey
  "add-credits": new AddStatutoryBiodiversityCreditsPage(),
  "estimate-cost-of-credits": new EstimatedCostStatutoryBiodiversityCreditsPage(),
  "credits-purchase-metric-upload": new UploadMetricFilePage(),
  "credits-purchase-check-metric-file": new CheckCreditsPurchaseMetricFilePage(),
  "credits-development-project-information": new CreditsDevelopmentInformationPage(),
  "credits-purchase-task-list": new CreditsPurchaseTaskListPage(),
  "credits-purchase-check-and-submit": new CreditsPurchaseCheckAndSubmitPage(),
  "credits-purchase-application-submitted": new CreditsPurchaseApplicationSubmittedPage(),
  "check-statutory-biodiversity-credits": new CreditsPurchaseApplicationListPage(),
  // Combined Case Journey
  "combined-case-projects": new CombinedCaseApplicationListPage(),
  "combined-case/tasklist": new CombinedCaseTaskListPage(),
  "combined-case-check-applicant-info": new CombinedCaseCheckApplicantInfoPage(),
  "combined-case-written-authorisation-upload": new CombinedCaseUploadWrittenAuthorisationPage(),
  "combined-case-check-written-authorisation-file": new CombinedCaseCheckWrittenAuthorisationPage(),
  "combined-case-land-ownership-upload": new CombinedCaseLandOwnershipUploadPage(),
  "combined-case-land-ownership-check": new CombinedCaseLandOwnershipCheckPage(),
  // "land-boundary-upload": new LandBoundaryUploadImageFilePage(),

};

