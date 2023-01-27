@regression
Feature: BNGP-156 Site Provider Eligibility check

    As a Site Provider
    I need to be presented clearly and precisely with all the information I need to proceed with my application
    So that I can be certain I am eligible and can proceed with my application in confidence

    Background: Start the journey
        Given I navigate to the "start" page
        And I start my registration
        And I am on the "check-you-can-register" page
        And I choose to check if I have everything I need to register

    Scenario: 1, 5  I cannot continue if the site is not in England
        And I am on the "site-in-england" page
        When I confirm that my site is not in england
        Then I should be on the "cannot-continue" page

    Scenario: 4, 7, 9 - If the applicant has answered Yes to all questions, the confirmation page will confirm they have everything they need for the application to proceed
        When I have answered yes to all eligibility questions
        Then I should be on the "results" page
    @new
    Scenario: 8 If the applicant has answered No (or I am not sure) to any of the questions, the confirmation page will list what they need to do
        When I have answered no or not sure to some of the eligibility questions
        And I am on the eligibility results page
# Then I should be shown what I need to provide.
# When I continue without an action
# Then I should be on the "applicant-name" page