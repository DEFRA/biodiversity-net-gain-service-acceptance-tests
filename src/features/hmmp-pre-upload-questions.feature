
Feature: BNGP-799 Habitat Management and Monitoring Plan pre-upload questions

    As a Site Provider
    I need to answer a set of questions about the habitat management of my site
    So that I can provide required information

    #page removed in https://eaflood.atlassian.net/browse/BNGP-3141
    # Scenario: I can add a valid habitat enhancement works start date
    #     When I navigate to the "habitat-works-start-date" page
    #     And I enter a start date of "12/10/2022"
    #     Then I should be on the "check-management-monitoring-details" page

    Scenario: BNGP-799 3 I can add a valid 30 year monitoring start date
        Given I navigate to the "monitoring-start-date" page
        Then I should be able to enter a valid 30 year monitoring start date of "13/10/2022"
