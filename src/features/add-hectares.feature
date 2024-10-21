@regression
Feature: BNGP-786 Enter Area in hectares

    As a Site Provider
    I need to enter the total hectares of my site
    So the Operator can identify the full size of the site

    Background:
        Given I choose to manage biodiversity gains
        And I choose to manage my gain sites
        And I choose to start a new registration
        And I choose to add "land-boundary" details
        And I upload a "land-boundary" file
        And I confirm it is the correct file
        And I add a valid grid reference "TL6222"

    Scenario Outline: I can add the total hectares for my land
        When I add total hectares as "<hectares>"
        Then I should be on the "check-land-boundary-details" page
        Examples:
            | hectares |
            | 1231.11  |

    Scenario: BNGP-786 1 I cannot add a total hectares value of 0
        When I add total hectares as "0"
        Then I should see the error "Size of the land must be more than 0.00 hectares"
        And I should see the error and the error summary displayed
