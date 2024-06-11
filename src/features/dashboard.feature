@regression  @new

Feature: Dashboard for multiple registration support (defra id)
    As a User
    I need the ability to view in progress applications in a dashboard
    So that I can take action against those applications

    Background: I Choose to manage biodiversity gains
        Given I choose to manage biodiversity gains
        And I am on the "manage-biodiversity-gains" page

    Scenario: BNGP-2821 3 I can start a new registration
        When I choose to manage my gain sites
        And I am on the "biodiversity-gain-sites" page
        And I choose to start a new registration
        Then I should be on the "register-land-task-list" page
    @new
    Scenario: BNGP-4472 3 I can start a new credit application
        When  I choose to buy statutory biodiversity credits
        And I am on the "check-statutory-biodiversity-credits" page
        And I choose to buy new statutory biodiversity credits
        Then I should be on the "credits-purchase-task-list" page





