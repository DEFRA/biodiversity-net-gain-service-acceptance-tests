@regression

Feature: Check and Submit
    As a Site Provider
    I need to review all the application details I have provided
    So that I can confirm I am satisfied with all the entered details and submit my application

    Background: Complete all registration details
        Given I navigate to the "start" page
        And I start my registration
        # eligibility
        And I have everything I need to start my biodiversity gain site registration
        # applicant details
        And I have completed the applicant details section
        # land boundary  add the link to the section from the tasklist?  just jumps straight there at the mo
        And I choose and upload a "land-boundary" file
        And I confirm it is the correct file
        And I have completed the land-boundary section
        # land ownership
        And I choose and upload a "land-ownership" file
        And I confirm it is the correct file
        And I have completed the land-ownership section
        # Metric
        And I choose and upload a "metric" file
        And I confirm it is the correct file
        # HMMP
        And I choose and upload a "management-plan" file
        And I confirm it is the correct file
        And I have completed the management-plan section
        # Legal Agreement
        And I navigate to the "legal-agreement-type" page
        And I select "Planning obligation" and continue
        And I choose and upload a "legal-agreement" file
        And I confirm it is the correct file
        And I have completed the legal-agreement section
        And I confirm I have completed all sections

    @skip()  # skip upload test for release 5
    Scenario: BNGP-190 1 - I can review all sections I have completed
        Then I should be on the "check-and-submit" page
        And I should see the "fullname" on the summary shown as "John Smith"
        And I should see the "role" on the summary shown as "Landowner"
        And I should see the "email address" on the summary shown as "test@example.com"
        And I should see the "grid reference" on the summary shown as "TL6233"
        And I should see the "hectares" on the summary shown as "1231.11"
        And I should see the "hmmp start date" on the summary shown as "12 October 2022"
        And I should see the "30 year monitor date" on the summary shown as "13 October 2022"
        And I should see the "legal-agreement type" on the summary shown as "Planning obligation"
        And I should see the "legal party name" on the summary shown as "legal party 1"
        And I should see the "legal party role" on the summary shown as "Landowner"
        And I should see the "legal-agreement start date" on the summary shown as "12 October 2022"

    Scenario: BNGP-190 2, 3 - When I update an answer to a section I am returned to the Summary Page
        When I choose to change the "fullname" answer on the "check-and-submit" page
        And I update the "fullname" to "new name"
        Then I should be returned to the "check-and-submit" page
        And I should see the "fullname" updated to "new name" on the "check-and-submit" page


    @e2e
    Scenario: BNGP-198 1 - The Biodiversity Gain Site Reference is displayed
        And I am on the "check-and-submit" page
        When I submit my application
        Then I should be on the "registration-submitted" page
        And the biodiversity gain site reference should be displayed
