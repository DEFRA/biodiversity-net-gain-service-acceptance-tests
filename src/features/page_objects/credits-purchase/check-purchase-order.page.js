const Page = require("../page");

class creditsPurchaseOrderPage extends Page {
  get titleText() {
    return "Will you be using a purchase order?";
  }

  get purchaseOrderNumber(){
    return $("#purchaseOrderNumber"); 
   }

  open() {
    return super.open("credits-purchase/check-purchase-order");
  }
}
module.exports = new creditsPurchaseOrderPage();