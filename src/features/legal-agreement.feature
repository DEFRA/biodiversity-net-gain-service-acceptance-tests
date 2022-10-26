@regression
Feature: legal-agreement

    Scenario Outline: BNGP-188 I have a choice between 2 types of legal agreement or not having one
        Given I am on the "legal-agreement-type" page
        When I select "<legal-agreement-type>" and continue
        Then I should be on the "<destination>" page
        @e2e
        Examples:
            | legal-agreement-type  | destination            |
            | conservation covenant | upload-legal-agreement |
        Examples:
            | legal-agreement-type            | destination            |
            | planning obligation             | upload-legal-agreement |
            | I do not have a legal agreement | need-legal-agreement   |

    Scenario: BNGP-188 There must be at least 1 legal party added
        Given I am on the "add-legal-agreement-parties" page
        When I add my fullname or organisation as "Mr John Smith"
        And I confirm my role as a "landowner"
        Then I should be on the "legal-agreement-start-date" page

    Scenario: BNGP-188 I can add a valid legal agreement startdate
        Given I am on the "legal-agreement-start-date" page
        # //todo case for page or make generic
        When I enter a valid startdate of "12/10/2022"
        Then I should be on the "check-legal-agreement-details" page


