@regression
Feature: Login
    As an Authenticated User
    I need to be directed to the correct landing page
    So that I can start or continue with a journey

    @skip() #skip as not ready yet until save and return BNGP-201
    Scenario: As a returning BNG user I want to login and continue with my previous journey
        Given I am a returning user
        When I Sign In to the register
        Then I should be able to continue with my previous journey

    Scenario: https://eaflood.atlassian.net/browse/BNGP-4486 remove legacy start page
        Given I try to navigate to the "/start" page
        Then I should be shown the "404" page
