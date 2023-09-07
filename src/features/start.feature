@regression
Feature: Start Page

    As a Site Provider, I want to see all the relevant guidance
    I need to start a registration application
    or to complete an unfinished one

    Scenario Outline: I can start an application:
        Given I navigate to the "start" page
        Then I should see the heading text "<message>"
        Examples:
            | message                                   |
            | Register land as a biodiversity gain site |
    @new
    Scenario: User can login
        # Given I have not logged into the service before
        Given I navigate to the "start" page
        When I start my registration
        And I login to the Government Gateway
        # When I Sign In to the register
        Then I should be on the "start" page


    Scenario: BNGP-2867 1 User attempts to access a gated page
    Scenario: When I retrieve my registration I will land on the task-list page
    Scenario: When I return to a section which is IN PROGRESS then I am returned to where I left off


    @skip() #skip as not ready yet until save and return BNGP-201
    Scenario: As a returning BNG user I want to login and continue with my previous journey
        Given I am a returning user
        When I Sign In to the register
        Then I should be able to continue with my previous journey