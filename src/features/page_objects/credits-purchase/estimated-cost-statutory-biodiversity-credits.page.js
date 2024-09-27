const Page = require("../page");

class EstimatedCostStatutoryBiodiversityCreditsPage extends Page {
  get titleText() {
    return "Estimated cost of statutory biodiversity credits";
  }

  get unitCostA1(){
    return $('[data-testid="credits-a1-cost"]'); 
   }

   get unitCostA2(){
    return $('*[data-testid="credits-a2-cost"]'); 
   }

   get unitCostA3(){
    return $('*[data-testid="credits-a3-cost"]'); 
   }

   get unitCostA4(){
    return $('*[data-testid="credits-a4-cost"]'); 
   }

   get unitCostA5(){
    return $('*[data-testid="credits-a5-cost"]'); 
   }

   get unitCostH(){
    return $('*[data-testid="credits-h-cost"]'); 
   }

   get unitCostW(){
    return $('*[data-testid="credits-w-cost"]'); 
   }

   get totalEstimatedCost(){
    return $('*[data-testid="credits-total-cost"]'); 
   }

  open() {
    return super.open("credits-purchase/estimated-cost-statutory-biodiversity-credits");
  }
}
module.exports = EstimatedCostStatutoryBiodiversityCreditsPage;