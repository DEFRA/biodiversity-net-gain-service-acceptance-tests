@regression
Feature: Task List Page

    As a Site Provider
    I need to see the status of the sections I need to complete
    So that I can track the progress of my registration.

    Background:
        Given I navigate to the "start" page
        And I start my registration
        # eligibility
        And I have everything I need to start my biodiversity gain site registration
        # applicant details
        And I have completed the applicant details section

    Scenario Outline: The task list page should show the correct status of tasks to complete
        When I navigate to the "register-land-task-list" page
        And all sections are complete
        Then I should see the "<task>" section status as "<status>"
        Examples:
            | document            | task             | status    |
            | Planning obligation | Legal agreements | completed |

    Scenario: BNGP-527 2, 5 - The sections on the task list page should show the status of progress.
        When I am on the "register-land-task-list" page
        Then I should see the "details" section status as "COMPLETED"
        And I should see my progress as "You have completed 1 of 7 sections"
        And I should see the "land-boundary" section status as "NOT STARTED"
        And I should see the "land-ownership" section status as "NOT STARTED"
        And I should see the "metric" section status as "NOT STARTED"
        And I should see the "hmmp" section status as "NOT STARTED"
        And I should see the "legal-agreement" section status as "NOT STARTED"
        And I should see the "check-and-submit" section status as "CANNOT START YET"

    @bug
    Scenario: BNGP-1612 BUG - Task-list : Metric section initially showing as completed.
        When I navigate to the "start" page
        And I start my registration
        And I have everything I need to start my biodiversity gain site registration
        And I have completed the applicant details section
        Then I should see the "metric" section status as "NOT STARTED"
