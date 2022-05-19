@regression
Feature: Task List Page

    As a BNG user
    I need to see the status of the sections I need to complete
    So that I can track the progress of my registration.

    @e2e @new
    Scenario Outline: After the document is uploaded the <task> section on the task list page should have a status of completed
        Given I have uploaded the "<document>"
        And I navigate to the "task-list" page
        Then I should see the "<task>" section status as "<status>"
        Examples:
            | document            | task             | status    |
            | planning obligation | Legal agreements | completed |