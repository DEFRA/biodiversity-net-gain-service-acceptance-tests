@regression
Feature: BNGP-799 HMMP pre-upload questions

    As a Site Provider
    I need to answer a set of questions about the habitat management of my site
    So that I can provide required information

    Scenario: I can add a valid habitat enhancement works start date
        Given I am on the "habitat-works-startdate" page
        When I enter a valid startdate
        Then I should be on the "monitoring-start-date" page

    Scenario: I can add a valid 30 year monitoring start date
        Given I have added a valid "habitat-works-startdate"
        And I am on the "monitoring-start-date" page
        When I enter a valid startdate
        # Todo: assert against next page.  CYA page for hmmp not built yet,
        # currently just asserting against the input and that it does not error
        Then I should not see an error