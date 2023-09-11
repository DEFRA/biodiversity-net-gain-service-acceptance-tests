@new
Feature: Login

    As an Authenticated User
    I need to be directed to/ from the login page
    So that I can continue with my journey

    Scenario: Attempting to login with valid credentials
        Given I navigate to the "start" page
        And I start my registration
        When I login to the Government Gateway
        Then I should be returned to the "start" page
