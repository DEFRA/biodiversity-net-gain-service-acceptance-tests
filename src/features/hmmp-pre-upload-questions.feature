@regression
Feature: BNGP-799 HMMP pre-upload questions

    As a Site Provider
    I need to answer a set of questions about the habitat management of my site
    So that I can provide required information

    Scenario: I can add a valid habitat enhancement works start date
        Given I am on the "habitat-works-start-date" page
        When I enter a valid startdate of "12/10/2022"
        Then I should be on the "monitoring-start-date" page

    Scenario: I can add a valid 30 year monitoring start date
        # Given I have added a valid "habitat-works-start-date"
        Given I am on the "monitoring-start-date" page
        Then I should be able to enter a valid 30 year monitoring startdate of "13/10/2022"
# Todo: assert against next page.  CYA page for hmmp not built yet,
# currently just asserting against the input and that it does not error
