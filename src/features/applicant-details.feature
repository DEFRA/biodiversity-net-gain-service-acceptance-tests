@regression
Feature: BNGP-179 Site Provider applicant details

    As as Site Provider
    I need to enter the central grid reference of my site
    So that the Operator is able to identify its location

    Scenario: BNGP-197 2 There is an option to select an applicant role
        Given I am on the "name" page
        And I confirm my fullname or organisation as "Mr John Smith"
        When I confirm my role as a "landowner"
        Then I should be on the "check-your-details" page

    Scenario: BNGP-197 3 There is a way that I can create an applicant role if necessary
        Given I am on the "role" page
        When I select other role
        Then I should be able to create a new role of "new role"

    Scenario: I can change/update all sections that I have entered
        Given I am on the "check-your-details" page
        When I choose to change the "name" answer
        Then I should be returned to the "name" page
        When I update the "name" to "new name"
        Then I should see the change "new name" show on the "check-your-details" page

    Scenario: When I update an answer to a section I am returned to the feature “CYA page”
        Given I am on the "check-your-details" page
        And I choose to change the "name" answer
        When I update the "name" to "new name"
        Then I should be returned to the "check-your-details" page
