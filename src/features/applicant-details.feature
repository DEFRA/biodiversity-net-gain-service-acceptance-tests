@regression
Feature: BNGP-179, BNGP-1099 Site Provider applicant details

    As a Site Provider
    I need to provide my personal details
    So that the Operator knows who is applying to register

    Background: Start the journey and add user details
        Given I navigate to the "start" page
        And I start my registration
        And I confirm my "fullname" as "BNGP-1469"
        And I confirm my role as a "landowner"
        And I confirm my "email address" as "me@you.com"
        And I navigate to the "check-your-details" page

    Scenario: BNGP-179 All entered details should be shown on the cya page
        Then I should see the "fullname" shown as "BNGP-1469" on the check-your-details page
        And I should see the "role" shown as "landowner" on the check-your-details page
        And I should see the "email" shown as "me@you.com" on the check-your-details page

    Scenario: BNGP-179 3 There is a way that I can create a new applicant role if necessary
        When I choose to change the "role" answer
        And I am returned to the "role" page
        And I select other role
        Then I should be able to create a new role of "new role"
        And I should see the "role" updated to "new role" on the check-your-details page

    Scenario: BNGP-1099 4 The Check Your Details page should display the entered email address and allow this to be changed
        And I choose to change the "email" answer
        And I should be returned to the "email" page
        When I update the "email" to "john.smith@email.com"
        Then I should see the "email" updated to "john.smith@email.com" on the check-your-details page

    @skip()
    Scenario: CYA : I can change/update all sections that I have entered
        When I choose to change the "fullname" answer
        And I am returned to the "name" page
        And I update the "fullname" to "new name"
        Then I should see the "fullname" updated to "new name" on the check-your-details page
        And I should see the "role" shown as "landowner" on the check-your-details page
        And I should see the "email" shown as "me@you.com" on the check-your-details page

    @skip()
    Scenario: CYA : When I update an answer to a section I am returned to the feature “CYA page”
        When I choose to change the "fullname" answer
        And I update the "fullname" to "new name"
        Then I should be returned to the "check-your-details" page
        And I should see the "fullname" updated to "new name" on the check-your-details page