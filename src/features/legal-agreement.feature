@regression
Feature: Legal Agreement

    As a Site Provider
    I need to answer questions about my legal agreement
    So that I can provide the data required for registration

    Background: start and add applicant details
        Given I navigate to the "start" page
        And I start my registration
        # eligibility
        And I have everything I need to start my biodiversity gain site registration
        # applicant details
        And I have completed the applicant details section
        # Legal Agreement Chose the Type
        And I navigate to the "legal-agreement-type" page

    Scenario Outline: BNGP-188 2 I have a choice between 2 types of legal agreement or not having one
        When I select "<legal-agreement-type>" and continue
        Then I should be on the "<destination>" page
        Examples:
            | legal-agreement-type            | destination               |
            | Conservation covenant           | legal-agreement-cc-upload |
            | Planning obligation             | legal-agreement-upload    |
            | I do not have a legal agreement | need-legal-agreement      |

    Scenario: BNGP-188 3 I should be able to add multiple legal parties
        When I select "Planning obligation" and continue
        And I choose and upload a "legal-agreement" file
        And I confirm it is the correct file
        And I add the legal party "Legal Party 1" with a role of "Landowner"
        And I choose to add another legal party of "Legal Party 2" with a role of "Developer"
        Then I can should see the number of legal parties in the title as "2"

    #todo refactor
    Scenario: BNGP-188 4 There is a way to remove unwanted legal parties from the list
        When I navigate to the "legal-party-list" page
        Then I can remove the other "legal party"

    @skip() #refactor when code changes come in
    Scenario: BNGP-188 5,6 There must be at least 1 legal party added
        When I navigate to the "legal-party-list" page
        And there is one legal party in the list
        When i try to remove it
        Then I see an error

    @skip() # known bug, add back in when https://eaflood.atlassian.net/browse/BNGP-3488 is in test
    Scenario: BNGP-188 7,8 If 'Other' option is selected as Role then the Role field popup must not be left blank
        When I navigate to the "add-legal-agreement-parties" page
        And I add the legal party "Legal Party 1" with a role of "Other"
        Then I should see the error "Other type of role cannot be left blank"

    Scenario: BNGP-188 9 I can add a valid legal agreement start date
        When I navigate to the "legal-agreement-start-date" page
        And I enter a start date of "12/10/2022"
        Then I should be on the "check-legal-agreement-details" page

    Scenario Outline: BNGP-188 9 I cannot add an invalid start date
        When I navigate to the "legal-agreement-start-date" page
        And I enter a start date of "<date>"
        Then I should see the error "Start date must be a real date"
        Examples:
            | date       |
            | 31/11/2022 |
            | 29/02/2022 |
            | 30/02/2022 |

    Scenario Outline: BNGP-1851 <page>:  Add Minimum start dates for Legal Agreement and HMMP sections
        When I navigate to the "<page>" page
        And I enter a start date of "29/01/2020"
        Then I should see the error "Start date must be after 29 January 2020"
        Examples:
            | page                       |
            | legal-agreement-start-date |
            | monitoring-start-date      |
            | habitat-works-start-date   |

    Scenario Outline: BNGP-2172 - BUG - All date fields should be able to accept a 1 digit integer for day or month
        When I navigate to the "<page>" page
        And I enter a start date of "15/1/2022"
        Then I should not see an error message displayed
        Examples:
            | page                       |
            | legal-agreement-start-date |
            | monitoring-start-date      |
            | habitat-works-start-date   |