@regression
Feature: legal-agreement

    As a Site Provider
    I need to answer questions about my legal agreement
    So that I can provide the data required for registration

    Scenario Outline: BNGP-188 2 I have a choice between 2 types of legal agreement or not having one
        Given I am on the "legal-agreement-type" page
        When I select "<legal-agreement-type>" and continue
        Then I should be on the "<destination>" page
        Examples:
            | legal-agreement-type            | destination            |
            | conservation covenant           | legal-agreement-upload |
            | planning obligation             | legal-agreement-upload |
            | I do not have a legal agreement | need-legal-agreement   |

    Scenario: BNGP-188 3 I should be able to add multiple legal parties
        Given I am on the "add-legal-agreement-parties" page
        Then I can choose to add another legal party

    Scenario: BNGP-188 4 There is a way to remove unwanted legal parties
        Given I am on the "add-legal-agreement-parties" page
        When I add another "legal party"
        Then I can choose to remove the other "legal party"

    Scenario: BNGP-188 5,6 There must be at least 1 legal party added
        Given I am on the "add-legal-agreement-parties" page
        When I add the legal party fullname or organisation as "Mr John Smith"
        And I confirm the legal party role as a "landowner"
        Then I should be on the "legal-agreement-start-date" page

    Scenario: BNGP-188 7,8 If 'Other' option is selected as Role then the Role field popup must not be left blank
        Given I am on the "add-legal-agreement-parties" page
        And I add the legal party fullname or organisation as "Mr John Smith"
        When I select "Other role" and continue
        Then I should see the error "Other type of role cannot be left blank"

    Scenario: BNGP-188 9 I can add a valid legal agreement start date
        Given I am on the "legal-agreement-start-date" page
        When I enter a valid start date of "12/10/2022"
        Then I should be on the "check-legal-agreement-details" page

    Scenario Outline: BNGP-188 9 I cannot add an invalid start date date
        Given I am on the "legal-agreement-start-date" page
        When I enter an invalid start date of "<date>"
        Then I should see the error "Start date must be a real date"
        Examples:
            | date       |
            | 31/11/2022 |
            | 29/02/2022 |
            | 30/02/2022 |







