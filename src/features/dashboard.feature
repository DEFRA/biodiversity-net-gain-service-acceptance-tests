@regression

Feature: Dashboard for multiple registration support (defra id)
    As a User
    I need the ability to view in progress applications in a dashboard
    So that I can take action against those applications

    Scenario: BNGP-2821 3 I can start a new registration
        Given I choose to manage my biodiversity gains
        And I am on the "manage-biodiversity-gains" page
        And I choose to manage my gain sites
        And I am on the "biodiversity-gain-sites" page
        When I choose to start a new registration
        Then I should be on the "register-land-task-list" page





