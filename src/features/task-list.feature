@regression
Feature: Task List Page

    As a Site Provider
    I need to see the status of the sections I need to complete
    So that I can track the progress of my registration.

    @skip()
    Scenario Outline: The task list page should show the correct status of tasks to complete
        Given I navigate to the "register-land-task-list" page
        When all sections are complete
        Then I should see the "<task>" section status as "<status>"
        Examples:
            | document            | task             | status    |
            | Planning obligation | Legal agreements | completed |

    Scenario: BNGP-527 2, 5 - The sections on the task list page should show the status of progress.
        #Todo: add more specific tests
        Given I navigate to the "register-land-task-list" page
        Then I should see my progress as "You have completed 0 of 7 sections."
        And I should see the "land-ownership" section status as "NOT STARTED"
        And I should see the "land-boundary" section status as "NOT STARTED"
        And I should see the "metric" section status as "NOT STARTED"
        And I should see the "legal-agreement" section status as "NOT STARTED"
        And I should see the "local-land-charge" section status as "NOT STARTED"
        And I should see the "check-and-submit" section status as "CANNOT START YET"

    #allocation
    Scenario Outline: allocation - The sections on the task list page should show the status of progress.
        Given I navigate to the "developer/tasklist" page
        Then I should see my progress as "You have completed 0 of 6 sections."
        And I should see the "upload-metric-file" section status as "NOT STARTED"
        And I should see the "check-and-submit" section status as "CANNOT START YET"

    #credits
    Scenario Outline: https://eaflood.atlassian.net/browse/BNGP-4128 2 - The sections on the task list page should show the status of progress.
        Given I navigate to the "credits-purchase-task-list" page
        Then I should see my progress as "You have completed 0 of 6 sections."
        And I should see the "credits-purchase-metric" section status as "NOT STARTED"
        And I should see the "add-credits" section status as "NOT STARTED"
        And I should see the "purchase-order" section status as "NOT STARTED"
        And I should see the "customer-due-diligence" section status as "NOT STARTED"
        And I should see the "terms-and-conditions" section status as "NOT STARTED"
        And I should see the "check-and-submit" section status as "CANNOT START YET"