@regression
Feature: BNGP-785 Grid Reference

    As a Site Provider
    I need to enter the central grid reference of my site
    So that the Operator is able to identify its location

    Background:
        Given I choose to manage biodiversity gains
        And I choose to manage my gain sites
        And I choose to start a new registration
        And I choose to add "land-boundary" details
        And I upload a "land-boundary" file
        And I confirm it is the correct file

    Scenario: BNGP-785 1 Grid reference cannot be blank
        When I continue without an action
        Then I should see the error "Enter the grid reference"

    Scenario Outline: BNGP-785 2 I can add a valid grid reference
        When I add a valid grid reference "<grid-reference>"
        Then I should be on the "add-hectares" page
        Examples:
            | grid-reference |
            | TL6233         |

    Scenario Outline: BNGP-785 2 I cannot enter an invalid grid reference "<grid-reference>"
        When I add an invalid grid reference "<grid-reference>"
        Then I should see the error "<error-msg>"
        And I should see the error and the error summary displayed
        Examples:
            | grid-reference  | error-msg                                                                                       |
            | 006233          | Grid reference must start with two letters, followed by only numbers and spaces, like SE 170441 |
            | TLSSSS          | Grid reference must start with two letters, followed by only numbers and spaces, like SE 170441 |
            | TL6255133315000 | Grid reference must be between 6 and 14 characters                                              |