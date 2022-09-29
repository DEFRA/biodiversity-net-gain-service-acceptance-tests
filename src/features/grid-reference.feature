@regression @skip()
Feature: BNGP-785 Grid Reference

    As as Site Provider
    I need to enter the central grid reference of my site
    So that the Operator is able to identify its location

    Background:
        Given I am on the "grid-reference" page

    Scenario Outline: I can add a valid grid reference
        Then I should be able to add a valid grid reference "<grid-reference>"
        @e2e
        Examples:
            | grid-reference |
            | TL6233         |
        Examples:
            | grid-reference |
            | TL 625 333     |
            | TL625333       |
            | TL 6255 3331   |
            | TL62553331     |
            | TL 62551 33315 |

    Scenario: Grid reference cannot be blank
        When I continue without an action
        Then I should see the error "Enter the grid reference"
        And I should see the error and the error summary displayed

    Scenario Outline: I cannot enter an invalid grid reference
        Then I should not be able to enter the invalid reference "<grid-reference>"
        Examples:
            | grid-reference    |
            | 006233            |
            | TLSSSS            |
            | TL 62551 33315 00 |




