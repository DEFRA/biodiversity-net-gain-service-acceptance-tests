
Feature: Developer Journey Tests

    # As a developer
    # I need to see the status of the sections I need to complete
    # So that I can track the progress of my registration.

    Background: Complete applicant details
        Given I choose to manage biodiversity gains
        # // nav bar manage link should really be baseurl
        And I choose to manage my off-site gains for my development projects
        And I choose to record off-site gains for a new development
    # # Developer Journey task list
    # And I navigate to the "developer/tasklist" page

    Scenario: BNGP-2194 2, 5 - The sections on the task list page should show the status of progress.
        When I am on the "developer/tasklist" page
        Then I should see the "details" section status as "COMPLETED"
        And I should see my progress as "You have completed 1 of 6 sections"
        And I should see the "Upload Metric 4.0 file" section status as "NOT STARTED"
        And I should see the "Confirm development details" section status as "NOT STARTED"
        And I should see the "Confirm off-site gain" section status as "NOT STARTED"
        And I should see the "Upload the consent document" section status as "NOT STARTED"
        And I should see the "submit" section status as "CANNOT START YET"


    # Check answers
    Scenario: BNGP-2964 1 - The Biodiversity Gain Site Reference is displayed
        # AND https://eaflood.atlassian.net/browse/BNGP-3378 - 3 appropriate fee is displayed for the journey
        #****applicant details section shouldn't exist for the DEFRAID for dev journey but currently does***
        # And I navigate to the "developer-details-name" page
        # And I have completed the applicant details section for my development

        # Development Information
        And I choose to add "Development Information" details
        And I am on the "development-project-information" page
        And I have completed the "allocation" Development Information section

        # Developer Metric
        And I choose to add "biodiversity gain site information" details
        And I enter my off site gain reference number as "1234"
        And I choose and upload a "developer-metric" file
        And I confirm it is the correct file
        And I confirm my development details
        And I confirm my off site gain
        # Consent for off site gain
        And I choose and upload a "consent-agreement" file
        And I confirm it is the correct file
        And I confirm I have completed all "developer" journey sections
        And I am on the "check-answers" page
        When I submit my developer information
        Then I should be on the "application-submitted" page
        And The biodiversity gain site reference should be displayed
        And The fee amount of "£45.00" should be displayed

    Scenario Outline: https://eaflood.atlassian.net/browse/BNGP-5068 I can check my BGS number API "statuses" against the Powerapp and display appropriate error messages
        And I choose to add "biodiversity gain site information" details
        And I enter my off site gain reference number as "<BGSNumber>"
        Then I should see the error "<error-msg>"
        Examples:
            | BGSNumber          | error-msg                                                                                   |
            | active             | This gain site registration is not complete - wait until you have confirmation.             |
            | rejected           | This reference is for a rejected application - enter a reference for an approved gain site. |
            | removed            | This reference is for a gain site which is no longer registered.                            |
            | internally-removed | This reference is for a gain site which is no longer registered.                            |
            | inactive           | This reference is for a gain site which has been withdrawn from registration.               |
            | doesNotExist       | The gain site reference was not recognised - enter a reference for an approved gain site.   |