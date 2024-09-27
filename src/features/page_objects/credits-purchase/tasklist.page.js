const Page = require("../page");

class CreditsTaskListPage extends Page {
    get titleText() {
      return "Buy statutory biodiversity credits";
    }
  
    get uploadMetric() {
      return $("a[href='/credits-purchase/upload-metric-file']");
    }

    get uploadMetricStatus() {
        return $("#upload-metric-status");
      }
  
    get addCredits(){
      return $("a[href='/credits-purchase/add-statutory-biodiversity-credits']");
    }
  
    get addCreditsStatus() {
      return $("#add-credits-status");
    }

    get addPurchaseOrder(){
        return $("a[href='/credits-purchase/check-purchase-order']");
      }
    
      get addPurhaseOrderStatus() {
        return $("#add-purchase-order-status");
      }
  
      get addCustomerDueDiligence(){
        return $("a[href='/credits-purchase/purchasing-individual-organisation']");
      }
    
      get addCustomerDueDiligenceStatus() {
        return $("#customer-due-diligence-status");
      }

      get acceptTermsAndConditions(){
        return $("a[href='/credits-purchase/confirm-terms-conditions']");
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
  module.exports = CreditsTaskListPage;