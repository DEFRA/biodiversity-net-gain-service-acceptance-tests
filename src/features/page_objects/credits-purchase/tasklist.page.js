const Page = require("../page");

class CreditsTaskListPage extends Page {
    get titleText() {
      return "Buy statutory biodiversity credits";
    }
  
    get uploadMetric() {
      return $("#upload-metric");
    }

    get uploadMetricStatus() {
        return $("#upload-metric-status");
      }

    get addDevelopmentInformation() {
      return $("#add-devlopment-project-information");
    }

    get addDevelopmentInformationStatus() {
      return $("#add-devlopment-project-information-status");
    }
  
    get addCredits(){
      return $("#add-credits");
    }
  
    get addCreditsStatus() {
      return $("#add-credits-status");
    }

    get addPurchaseOrder(){
        return $("#add-purchase-order");
      }
    
      get addPurhaseOrderStatus() {
        return $("#add-purchase-order-status");
      }
  
      get addCustomerDueDiligence(){
        return $("#customer-due-diligence");
      }
    
      get addCustomerDueDiligenceStatus() {
        return $("#customer-due-diligence-status");
      }

      get acceptTermsAndConditions(){
        return $("#terms-and-conditions");
      }
    
      get acceptTermsAndConditionsStatus() {
        return $("#terms-and-conditions-status");
      }
  
    get submitStatus(){
      return $("#check-your-answers-status");
    }
  
    get checkAndSubmitBtn(){
      return $("a[href='/credits-purchase/check-and-submit']");
    }
  
    open() {
      return super.open("credits-purchase/tasklist");
    }
  }
  module.exports = new CreditsTaskListPage();