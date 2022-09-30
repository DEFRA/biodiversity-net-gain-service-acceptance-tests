@regression
Feature: BNGP-786 Enter Area in hectares

    As a Site Provider
    I need to enter the total hectares of my site
    So the Operator can identify the full size of the site

    Background:
        Given I am on the "add-hectares" page

    @e2e
    Scenario Outline: I can add the total hectares for my land
        Then I should be able to add my total hectares of "<hectares>"
        Examples:
            | hectares |
            | 1231.11  |

    Scenario: I cannot add a total hectares value of 0
        When I add total hectares as 0
        Then I should see the error "Size of the land must be more than 0.00 hectares"
        And I should see the error and the error summary displayed

    Scenario: I cannot conitinue without adding total hectares
        When I continue without an action
        Then I should see the error "Enter the size of the land in hectares"
        And I should see the error and the error summary displayed