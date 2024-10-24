@regression

Feature: Check and Submit
    As a Site Provider
    I need to review all the application details I have provided
    So that I can confirm I am satisfied with all the entered details and submit my application

    Background: Complete all registration details
        #Given I choose to start a new registration
        Given I choose to manage biodiversity gains
        # // nav bar manage link should really be baseurl
        And I choose to manage my gain sites
        And I choose to start a new registration
        # Applicant info
        And I choose to add "applicant-info" details
        And I have completed the "landowner" applicant information section
        And I am on the "written-authorisation-upload" page
        And I upload a "written-authorisation" file
        And I confirm it is the correct file
        And I am on the "check-applicant-info" page
        And confirm the "applicant-info" details are correct
        # land ownership
        And I choose to add "land-ownership" details
        And I am on the "land-ownership-upload" page
        And I upload a "land-ownership" file
        And I confirm it is the correct file
        And I have completed the "registration" land-ownership section
        # land boundary
        And I choose to add "land-boundary" details
        And I am on the "land-boundary-upload" page
        And I upload a "land-boundary" file
        And I confirm it is the correct file
        And I have completed the land-boundary section
        # Metric
        And I choose to add "metric" details
        And I am on the "metric-upload" page
        And I upload a "metric" file
        And I confirm it is the correct file
        And I confirm the "check-habitat-baseline" information is correct
        And I confirm the "check-habitat-creation" information is correct
        And I confirm the "check-metric-details" information is correct
        And I should see the "metric" section status as "Completed"
        # Legal Agreement
        And I choose to add "legal-agreement" details
        And I upload a "legal-agreement" file
        And I confirm it is the correct file
        And I have completed the legal-agreement section
        # Local land Charges
        And I choose to add "local-land-charge" details
        And I am on the "local-land-charge-upload" page
        And I upload a "local-land-charge" file
        And I confirm it is the correct file
        # Confirm all sections complete
        And I confirm I have completed all "landowner" journey sections

        #check and submit page
        And I am on the "check-and-submit" page
        And I have agreed to the terms and conditions

    @skip()  # skip upload test for release 5
    Scenario: BNGP-190 1 - I can review all sections I have completed
        # Then I should be on the "check-and-submit" page
        Given I am on the "check-and-submit" page
        #---- Applicant information
        # And I should see the "fullname" on the summary shown as "John Smith"
        # And I should see the "role" on the summary shown as "Landowner"
        # And I should see the "email address" on the summary shown as "test@example.com"
        #---- Land ownership
        Then I should see the "Proof of land ownership file uploaded" on the summary shown as "test_12kb.docx"
        #---- Biodiversity gain site boundary
        And I should see the "Land boundary file uploaded" on the summary shown as "test_12kb.docx"
        And I should see the "grid reference" on the summary shown as "TL6233"
        And I should see the "hectares" on the summary shown as "1231.11 ha"
        #---- Statutory biodiversity metric and habitat declarations

        And I should see the "Biodiversity Metric file uploaded" on the summary shown as "test_metric.xlsm"
        And I should see the "Habitat baseline information is correct" on the summary shown as "Yes"
        And I should see the "Habitat creation and enhancement information is correct" on the summary shown as "Yes"

        #---- Legal information
        # And I should see the "Landowner consent" on the summary shown as "Yes"
        And I should see the "Habitat management and monitoring plan uploaded" on the summary shown as "test_12kb.docx"
        And I should see the "Start date of the 30 year management and monitoring period" on the summary shown as "13 October 2022"
        And I should see the "Landowner name" on the summary shown as "John Smith"
        And I should see the "legal-agreement type" on the summary shown as "Planning obligation"
        And I should see the "legal party name" on the summary shown as "legal party 1"
        And I should see the "legal party role" on the summary shown as "Landowner"
        And I should see the "legal-agreement start date" on the summary shown as "12 October 2022"

    @skip() #update with https://eaflood.atlassian.net/browse/BNGP-3983
    Scenario: BNGP-190 2, 3 - When I update an answer to a section I am returned to the check and submit Page
        Given I choose to change the "fullname" answer on the "check-and-submit" page
        When I update the "fullname" to "new name"
        Then I should be returned to the "check-and-submit" page
        And I should see the "fullname" updated to "new name" on the "check-and-submit" page

    @e2e
    Scenario: BNGP-198 1 - The Biodiversity Gain Site Reference is displayed
        # AND https://eaflood.atlassian.net/browse/BNGP-3378 - 3 appropriate fee is displayed for the journey
        When I submit my application
        Then I should be on the "application-submitted" page
        And The "biodiversity gain site" reference should be displayed
        And The fee amount of "£639.00" should be displayed
        And The sort code "60 70 80" should be displayed
        And The account number "10026630" should be displayed
        And The swift code "NWBKGB2L" should be displayed

    Scenario: BNGP-3635 - On submission if the confirmation page is refreshed the details are not resubmitted or shown on the page
        And I submit my application
        And I am on the "application-submitted" page
        When I refresh the page
        Then The page title should be "You’ve submitted your application"
        And the fee amount should not be displayed

    Scenario: https://eaflood.atlassian.net/browse/BNGP-4336 BACS payment details
        When I submit my application
        And I am on the "application-submitted" page
        Then The sort code "60 70 80" should be displayed
        And The account number "10026630" should be displayed
        And The swift code "NWBKGB2L" should be displayed