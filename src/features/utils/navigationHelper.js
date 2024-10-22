const pages = require('../page_objects/page_objects')

async function startNewRegistrationJourney() {
    // // And I choose to manage my biodiversity gains
    //   // nav bar manage link should really be baseurl
    //   await pages['manage-biodiversity-gains'].manageBngNavLink.click();

    //   // And I choose to manage my gain sites
    //   // # And I am on the "biodiversity-gain-sites" page
    //   await pages['manage-biodiversity-gains'].manageGainSitesLink.click();

    //   expect(await browser.getTitle()).toContain(pages['biodiversity-gain-sites'].titleText);

      // And I choose to start a new registration
      await pages['biodiversity-gain-sites'].registerNewGainSiteLink.click();

      // expect(await browser.getTitle()).toContain(pages['register-land-task-list'].titleText);
  }

  async function startNewCreditsPurchaseJourney() {
  
    // And I choose to manage my biodiversity gains
      // nav bar manage link should really be baseurl
      await pages['manage-biodiversity-gains'].manageBngNavLink.click();

      // And I choose to manage my gain sites
      // # And I am on the "biodiversity-gain-sites" page
      await pages['manage-biodiversity-gains'].manageCreditApplicationsLink.click();

      expect(await browser.getTitle()).toContain(pages['check-statutory-biodiversity-credits'].titleText);

      // And I choose to start a new credit purchase application
      await pages['check-statutory-biodiversity-credits'].buyStatutoryCreditsLink.click();

      expect(await browser.getTitle()).toContain(pages['credits-purchase-tasklist'].titleText);
  }

module.exports = {
    startNewRegistrationJourney, 
    startNewCreditsPurchaseJourney
  }