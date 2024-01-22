@regression

Feature: Check and Submit
    As a Site Provider
    I need to review all the application details I have provided
    So that I can confirm I am satisfied with all the entered details and submit my application

    Background: Complete all registration details
        Given I am on the "register-land-task-list" page

        # Applicant info
        And I choose to add "applicant-info" details
        And I have completed the applicant information section

        And I am on the "written-authorisation-upload" page
        And I choose and upload a "written-authorisation" file
        And I confirm it is the correct file

        And I am on the "check-applicant-info" page
        And confirm the applicant-info details are correct

        # land ownership
        And I choose to add "land-ownership" details
        And I am on the "land-ownership-upload" page
        And I choose and upload a "land-ownership" file
        And I confirm it is the correct file
        And I have completed the land-ownership section
        # land boundary  add the link to the section from the tasklist?  just jumps straight there at the mo
        And I choose to add "land-boundary" details
        And I am on the "land-boundary-upload" page
        And I choose and upload a "land-boundary" file
        And I confirm it is the correct file
        And I have completed the land-boundary section
        # Metric
        And I choose to add "metric" details
        And I am on the "metric-upload" page
        And I choose and upload a "metric" file
        And I confirm it is the correct file
        And I confirm the "check-habitat-baseline" information is correct
        And I confirm the "check-habitat-creation" information is correct
        And I confirm the "check-metric-details" information is correct
        And I should see the "metric" section status as "COMPLETED"
        # Legal Agreement
        And I choose to add "legal-agreement" details
        And I am on the "legal-agreement-type" page
        And I select "Conservation covenant" and continue
        And I am Informed I have to add all "Conservation covenant" files
        And I choose and upload a "legal-agreement" file
        And I confirm it is the correct file
        And I have completed the legal-agreement section
        # Local land Charges
        And I choose to add "local-land-charge" details
        And I am on the "local-land-charge-upload" page
        And I choose and upload a "local-land-charge" file
        And I confirm it is the correct file
        # Confirm all sections complete
        And I confirm I have completed all "landowner journey" sections

    @skip()  # skip upload test for release 5
    Scenario: BNGP-190 1 - I can review all sections I have completed
        Then I should be on the "check-and-submit" page
        #---- Applicant information
        # And I should see the "fullname" on the summary shown as "John Smith"
        # And I should see the "role" on the summary shown as "Landowner"
        # And I should see the "email address" on the summary shown as "test@example.com"
        #---- Land ownership
        And I should see the "Proof of land ownership file uploaded" on the summary shown as "test_12kb.docx"
        #---- Biodiversity gain site boundary
        And I should see the "Land boundary file uploaded" on the summary shown as "test_12kb.docx"
        And I should see the "grid reference" on the summary shown as "TL6233"
        And I should see the "hectares" on the summary shown as "1231.11"
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

    Scenario: BNGP-190 2, 3 - When I update an answer to a section I am returned to the Summary Page
        When I choose to change the "fullname" answer on the "check-and-submit" page
        And I update the "fullname" to "new name"
        Then I should be returned to the "check-and-submit" page
        And I should see the "fullname" updated to "new name" on the "check-and-submit" page

    @e2e     @new
    Scenario: BNGP-198 1 - The Biodiversity Gain Site Reference is displayed
        # AND https://eaflood.atlassian.net/browse/BNGP-3378 - 3 appropriate fee is displayed for the journey
        And I am on the "check-and-submit" page
        And I have agreed to the terms and conditions
        When I submit my application
        Then I should be on the "application-submitted" page
        And The biodiversity gain site reference should be displayed
        And The fee amount of "£639.00" should be displayed

# Scenario: BNGP-3635 - On submission if the confirmation page is refreshed the details are not resubmitted or shown on the page
#     And I am on the "check-and-submit" page
#     And I submit my application
#     And I am on the "application-submitted" page
#     When I refresh the page
#     Then the title should be ""
#     And the fee amount is not displayed

