@regression
Feature: Task List Page

    As a Site Provider
    I need to see the status of the sections I need to complete
    So that I can track the progress of my registration.

    @skip()
    Scenario Outline: The task list page should show the correct status of tasks to complete
        Given I navigate to the "register-land-task-list" page
        And all sections are complete
        Then I should see the "<task>" section status as "<status>"
        Examples:
            | document            | task             | status    |
            | planning obligation | Legal agreements | completed |

    Scenario: BNGP-527 2, 5 - The sections on the task list page should show the status of progress.
        Given I navigate to the "start" page
        And I start my registration
        And I confirm my "fullname" as "John Smith"
        And I confirm my role as a "landowner"
        And I confirm my "email address" as "test@example.com"
        When I confirm my "details" are correct
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
        Given I navigate to the "start" page
        And I start my registration
        And I confirm my "fullname" as "John Smith"
        And I confirm my role as a "landowner"
        And I confirm my "email address" as "test@example.com"
        When I confirm my "details" are correct
        Then I should see the "metric" section status as "NOT STARTED"
