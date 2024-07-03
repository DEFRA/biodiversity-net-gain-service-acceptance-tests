const { Given, When, Then } = require('@wdio/cucumber-framework');
const agentActingForClientPage = require("../page_objects/applicant_info/agent-acting-for-client.page");
const checkAccountDetailsPage = require("../page_objects/applicant_info/check-defra-account-details.page");
const isClientIndividualorOrgPage = require("../page_objects/applicant_info/client-individual-organisation.page");
const clientsNamePage = require("../page_objects/applicant_info/clients-name.page");
const isClientAddressUkPage = require("../page_objects/applicant_info/is-client-address-in-UK.page");
const clientsUkAddressPage = require("../page_objects/applicant_info/clients-uk-address.page")
const clientsEmailPage = require("../page_objects/applicant_info/clients-email-address.page");
const clientsPhoneNumberPage = require("../page_objects/applicant_info/clients-phone-number.page");
const checkApplicantInfoPage = require("../page_objects/applicant_info/check-applicant-information.page");
const developerAgentActingForClientPage = require("../page_objects/developer/applicant-info/agent-acting-for-client.page");
const developerLandownerOrLeaseHolder = require("../page_objects/developer/applicant-info/landowner-or-leaseholder.page");
const developerIsClientIndividualorOrgPage = require("../page_objects/developer/applicant-info/client-individual-organisation.page");
const developerCheckAccountDetailsPage = require("../page_objects/developer/applicant-info/check-defra-account-details.page");


Given("I have completed the {string} applicant information section", async (journey) => {
    await completeApplicantInfoSection("John", "Smith", journey, "horizon House", "Bristol", "BS1 5AH", "landowner@example.com", "121312312312");
  })

Given("confirm the applicant-info details are correct", async () => {

  // assert against the page title 
  expect(await browser.getTitle()).toContain(checkApplicantInfoPage.titleText);
  await checkApplicantInfoPage.continueButton.click();

})

async function completeApplicantInfoSection(firstname, lastname, journey, addr1, town, postcode, email, phonenumber) { 
  switch (journey) {
    case "landowner": {     
        // assert against the page title 
        await $("h1").waitForExist();
        expect(await browser.getTitle()).toContain(agentActingForClientPage.titleText);

        //Are you an agent acting on behalf of a client? Yes
        await agentActingForClientPage.radioYes.click();
        await agentActingForClientPage.continueButton.click();

        // assert against the page title 
        await $("h1").waitForExist();
        expect(await browser.getTitle()).toContain(checkAccountDetailsPage.titleText);

        // Check your Defra account details are up to date
        await checkAccountDetailsPage.confirmAccountDetailsChkBox.click();
        await checkAccountDetailsPage.continueButton.click();

        // assert against the page title 
        await $("h1").waitForExist();
        expect(await browser.getTitle()).toContain(isClientIndividualorOrgPage.titleText);

        // Is your client an individual or organisation?
        await isClientIndividualorOrgPage.radioIndividual.click();
        await isClientIndividualorOrgPage.continueButton.click();

        // assert against the page title 
        await $("h1").waitForExist();
        expect(await browser.getTitle()).toContain(clientsNamePage.titleText);

        // What is your client's name?
        await clientsNamePage.addFirstName(firstname);
        await clientsNamePage.addLastName(lastname);
        await clientsNamePage.continueButton.click();

        // assert against the page title 
        await $("h1").waitForExist();
        expect(await browser.getTitle()).toContain(isClientAddressUkPage.titleText);

        // Is your client's address in the UK?
        await isClientAddressUkPage.radioYes.click();
        await isClientAddressUkPage.continueButton.click();

        // assert against the page title 
        await $("h1").waitForExist();
        expect(await browser.getTitle()).toContain(clientsUkAddressPage.titleText);

        // What is your client's address?
        await clientsUkAddressPage.addAddr1(addr1);
        await clientsUkAddressPage.addTown(town);
        await clientsUkAddressPage.addPostcode(postcode);
        await clientsUkAddressPage.continueButton.click();

        // assert against the page title 
        await $("h1").waitForExist();
        expect(await browser.getTitle()).toContain(clientsEmailPage.titleText);

        // What is your client's email address?
        await clientsEmailPage.addEmailAddress(email);
        await clientsEmailPage.continueButton.click();

        // assert against the page title 
        await $("h1").waitForExist();
        expect(await browser.getTitle()).toContain(clientsPhoneNumberPage.titleText);

        // What is your client's phone number?
        await clientsPhoneNumberPage.addPhone(phonenumber);
        await clientsPhoneNumberPage.continueButton.click();
              // And I am on the "written-authorisation-upload" page
              // And I upload a "written-authorisation" file
              // And I confirm it is the correct file 
    
     break;
    }
    case "developer": {        
            //Are you an agent acting on behalf of a client? No 
            expect(await browser.getTitle()).toContain(developerAgentActingForClientPage.titleText);
            await developerAgentActingForClientPage.radioNo.click();
            await developerAgentActingForClientPage.continueButton.click();
    
            // Are you the landowner or leaseholder? Yes
            expect(await browser.getTitle()).toContain(developerLandownerOrLeaseHolder.titleText);
            await developerLandownerOrLeaseHolder.radioYes.click();
            await developerLandownerOrLeaseHolder.continueButton.click();

            // Is your client an individual or organisation? Individual
            expect(await browser.getTitle()).toContain(developerIsClientIndividualorOrgPage.titleText);
            await developerIsClientIndividualorOrgPage.radioIndividual.click();
            await developerIsClientIndividualorOrgPage.continueButton.click();
            // Todo change the continue selector back for consistency

            // Check your Defra account details are up to date? 
            expect(await browser.getTitle()).toContain(developerCheckAccountDetailsPage.titleText);
            await developerCheckAccountDetailsPage.confirmAccountDetailsChkBox.click();
            await developerCheckAccountDetailsPage.continueButton.click();    
      break;
    }
  }
}