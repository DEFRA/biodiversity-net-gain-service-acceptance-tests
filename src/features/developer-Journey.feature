@regression @new
Feature: Developer Journey Tests

    # As a developer
    # I need to see the status of the sections I need to complete
    # So that I can track the progress of my registration.

    Background: Complete applicant details

        Given I navigate to the "routing-register" page
        # BNGP-2182
        And I choose to record my off-site gain site
        # Eligibility BNGP-2193
        And I have everything I need to record off-site biodiversity gain for my development project
        # applicant details BNGP-2173
        And I have completed the applicant details section for my development

    Scenario: BNGP-2194 2, 5 - The sections on the task list page should show the status of progress.
        When I am on the "developer/tasklist" page
        Then I should see the "details" section status as "COMPLETED"
        And I should see my progress as "You have completed 1 of 6 sections"
        And I should see the "Upload Metric 4.0 file" section status as "NOT STARTED"
        And I should see the "Confirm development details" section status as "NOT STARTED"
        And I should see the "Confirm off-site gain" section status as "NOT STARTED"
        And I should see the "Upload the consent document" section status as "NOT STARTED"
        And I should see the "submit" section status as "CANNOT START YET"
    @new
    Scenario: Complete all allocation tasks to submit and record my off-site development
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

        # Check answers
        # Scenario: BNGP-2964 1 - The Biodiversity Gain Site Reference is displayed
        And I am on the "check-answers" page
        When I submit my developer information
        Then I should be on the "confirm" page
        And the biodiversity gain site reference should be displayed

