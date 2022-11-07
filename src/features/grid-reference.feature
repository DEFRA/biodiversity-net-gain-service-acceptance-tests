@regression
Feature: BNGP-785 Grid Reference

    As as Site Provider
    I need to enter the central grid reference of my site
    So that the Operator is able to identify its location

    Background:
        Given I am on the "grid-reference" page

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
            | grid-reference    | error-msg                                                                                       |
            | 006233            | Grid reference must start with two letters, followed by only numbers and spaces, like SE 170441 |
            | TLSSSS            | Grid reference must start with two letters, followed by only numbers and spaces, like SE 170441 |
            | TL 62551 33315 00 | Grid reference must be between 6 and 14 characters                                              |