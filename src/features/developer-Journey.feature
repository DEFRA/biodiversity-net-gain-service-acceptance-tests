@regression
Feature: Developer Journey Tests

    As a developer
    I need to see the status of the sections I need to complete
    So that I can track the progress of my allocation of off-site biodiversity gains to a development.

    Background: Choose to record off-site gains for a new development
        Given I choose to manage biodiversity gains
        # // nav bar manage link should really be baseurl
        And I choose to manage my off-site gains for my development projects
        And I choose to record off-site gains for a new development
        And I am on the "developer/tasklist" page

    Scenario: BNGP-2194 2, 5 - The sections on the task list page should show the status of progress.
        # Applicant Info
        # Add details about the applicant
        And I choose to add "developer-applicant-info" details
        When I have completed the "developer" applicant information section
        Then I should see my progress as "You have completed 1 of 5 sections."
        And I should see the "developer-applicant-info" section status as "Completed"
        And I should see the "biodiversity gain site information" section status as "Not started"
        And I should see the "Development Project" section status as "Not started"
        And I should see the "planning decision notice" section status as "Not started"
        And I should see the "check-and-submit" section status as "Cannot start yet"

    @e2e
    Scenario: https://eaflood.atlassian.net/browse/BNGP-2964 1 - The Allocation Biodiversity Gain Site Reference is displayed
        # Applicant Info
        # Add details about the applicant
        And I choose to add "developer-applicant-info" details
        And I have completed the "developer" applicant information section

        # Development Information
        # Upload Metric : Add Biodiversity Gain Site details
        And I choose to add "biodiversity gain site information" details
        And I enter my off site gain reference number as "BGS-DoNot-Use-007"
        And I upload a "developer-metric" file
        And I confirm it is the correct file
        And I confirm my off site gain

        # Add development project details
        And I choose to add "Development Project" details
        And I am on the "development-project-details" page
        And I have completed the "allocation" Development Information section

        # Upload planning decision notice
        And I choose to add "planning-decision-notice" details
        And I upload a "planning-decision-notice" file
        And I confirm it is the correct file

        # Submit your off-site gains information
        And I confirm I have completed all "developer" journey sections
        And I am on the "check-answers" page
        And I have agreed to the terms and conditions
        When I submit my developer information
        Then I should be on the "application-submitted" page
        And The "biodiversity gain site" reference should be displayed
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
    @new
    Scenario Outline: https://eaflood.atlassian.net/browse/BNGP-5505 I should be able to upload and download a .<filetype> filetype for <document> files
        When I choose to add "<document>" details
        Then I should be able to upload a "<document>" file with a filetype of "<filetype>"
        And I can download the "<document>"
        Examples:
            | document                 | filetype |
            | planning-decision-notice | doc      |
            | planning-decision-notice | docx     |
            | planning-decision-notice | pdf      |
