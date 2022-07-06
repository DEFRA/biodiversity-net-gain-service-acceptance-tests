@regression @skip()
Feature: Task List Page

    As a BNG user
    I need to see the status of the sections I need to complete
    So that I can track the progress of my registration.

    Scenario Outline: The task list page should show the correct status of tasks to complete
        Given I navigate to the "task-list" page
        Then I should see the "<task>" section status as "<status>"
        Examples:
            | document            | task             | status    |
            | planning obligation | Legal agreements | completed |