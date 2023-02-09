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

    @skip() #skip as not ready yet until save and return BNGP-201
    Scenario: As a returning BNG user I want to login and continue with my previous journey
        Given I am a returning user
        When I Sign In to the register
        Then I should be able to continue with my previous journey