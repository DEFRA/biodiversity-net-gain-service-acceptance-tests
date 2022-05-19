@regression
Feature: Start page

    As a BNG user, I want to see all the relevant guidance
    I need to start a registration application
    or to complete an unfinished one

    Scenario Outline:
        Given I am on the "start" page
        Then I should see the header with text saying "<message>"
        Examples:
            | message                                      |
            | Register land for off-site biodiversity gain |

    Scenario: As a returning BNG user I want to login and continue with my previous journey
        Given I am a returning user
        When I Sign In to the register
        Then I should be able to continue with my previous journey


