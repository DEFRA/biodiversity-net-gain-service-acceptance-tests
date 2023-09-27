@regression
Feature: Developer Journey Tests

    # As a developer
    # I need to see the status of the sections I need to complete
    # So that I can track the progress of my registration.

    Background: Complete applicant details

        #Start Page
        Given I navigate to the "start" page
        And I start my registration
        # DefraID
        And I login to the Government Gateway
        And I am logged in to the service
        # Developer Journey task list
        And I navigate to the "developer/tasklist" page

    Scenario: BNGP-2194 2, 5 - The sections on the task list page should show the status of progress.
        When I am on the "developer/tasklist" page
        Then I should see the "details" section status as "COMPLETED"
        And I should see my progress as "You have completed 1 of 6 sections"
        And I should see the "Upload Metric 4.0 file" section status as "NOT STARTED"
        And I should see the "Confirm development details" section status as "NOT STARTED"
        And I should see the "Confirm off-site gain" section status as "NOT STARTED"
        And I should see the "Upload the consent document" section status as "NOT STARTED"
        And I should see the "submit" section status as "CANNOT START YET"
    @e2e
    # Check answers
    Scenario: BNGP-2964 1 - The Biodiversity Gain Site Reference is displayed
        # AND https://eaflood.atlassian.net/browse/BNGP-3378 - 3 appropriate fee is displayed for the journey
        #****applicant details section shouldn't exist for the DEFRAID for dev journey but currently does***
        And I navigate to the "developer-details-name" page
        And I have completed the applicant details section for my development
        # Developer Metric
        And I want to upload the metric file
        And I enter my off site gain reference number as "AZ12208461"
        And I choose and upload a "developer-metric" file
        And I confirm it is the correct file
        And I confirm my development details
        And I confirm my off site gain
        # Consent for off site gain
        And I choose and upload a "consent-agreement" file
        And I confirm it is the correct file
        And I confirm I have completed all "developer journey" sections
        #Additional emails (is this in the right place?)
        And I continue without adding email notifications for additional people

        And I am on the "check-answers" page
        When I submit my developer information
        Then I should be on the "application-submitted" page
        And The biodiversity gain site reference should be displayed
        And The fee amount of "£45.00" should be displayed

