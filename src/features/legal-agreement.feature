

Feature: Legal Agreement

    As a Site Provider
    I need to answer questions about my legal agreement
    So that I can provide the data required for registration

    Background:
        #Given I choose to start a new registration
        Given I choose to manage biodiversity gains
        # // nav bar manage link should really be baseurl
        And I choose to manage my gain sites
        And I choose to start a new registration
        And I choose to add "legal-agreement" details

    Scenario Outline: BNGP-188 2 I have a choice between 2 types of legal agreement or not having one
        When I select "<legal-agreement-type>" and continue
        Then I should be on the "<destination>" page
        Examples:
            | legal-agreement-type            | destination                 |
            | Conservation covenant           | need-add-all-legal-files-cc |
            | Planning obligation             | need-add-all-legal-files    |
            | I do not have a legal agreement | need-legal-agreement        |

    Scenario: BNGP-188 3 I should be able to add multiple legal parties
        When I select "Planning obligation" and continue
        And I am informed I have to add all "Planning obligation" files
        And I upload a "planning-obligation" file
        And I confirm it is the correct file
        And I confirm all legal agreement files are added
        And I am informed I have to add all "Local planning authority" details
        And I add the local planning authority as "Middlesbrough LPA"

        And I add the responsible body "legal party 2" listed on the legal agreement
        And I confirm other landowners or leaseholders are listed on the legal agreement as "true"

        And I add the legal party "Legal Party 1" with a role of "Landowner"
        And I choose to add another legal party of "Legal Party 2" with a role of "Developer"
        Then I can should see the number of legal parties in the title as "2"

    @skip() #todo refactor
    Scenario: BNGP-188 4 There is a way to remove unwanted legal parties from the list
        When I navigate to the "legal-party-list" page
        Then I can remove the other "legal party"

    @skip() #refactor when code changes come in
    Scenario: BNGP-188 5,6 There must be at least 1 legal party added
        When I navigate to the "legal-party-list" page
        And there is one legal party in the list
        When i try to remove it
        Then I see an error

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

    Scenario Outline: BNGP-2172 - BUG - All date fields should be able to accept a 1 digit integer for day or month
        When I navigate to the "<page>" page
        And I enter a start date of "15/1/2022"
        Then I should not see an error message displayed
        Examples:
            | page                       |
            | legal-agreement-start-date |
            | monitoring-start-date      |

    Scenario: https://eaflood.atlassian.net/browse/BNGP-5489 - Bug - 1
        When I select "Conservation covenant" and continue
        And I am informed I have to add all "Conservation covenant" files
        And I upload a "legal-agreement" file
        And I confirm all legal agreement files are added
        And I add the responsible body "legal party 2" listed on the legal agreement
        And I confirm other landowners or leaseholders are listed on the legal agreement as "false"
        Then I should be on the "habitat-plan-legal-agreement" page
# And I add another landowner or leaseholder as an organisation
