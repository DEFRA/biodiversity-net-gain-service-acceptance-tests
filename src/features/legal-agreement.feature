@e2e
Feature: legal agreement

    As a Site Provider
    I need to provide a copy of the legal agreement
    So that I can prove to the Register Operator that I have met the eligibility criteria

    Background:
        Given I am on the "legal-agreement-upload" page

    Scenario: I can upload the legal-agreement document
        When I choose and upload a "legal agreement"
        Then I should be on the "legal-agreement-check" page

    Scenario: I cannot upload a file that is not in the specified format
        When I choose a file type that is not in the specified format
        Then I should not be able to upload the file
        And I am informed of what the allowed file types should be

    Scenario: I can check that the uploaded file is the one I wanted to upload before continuing
        When I choose and upload a "legal agreement"
        And I am on the "legal-agreement-check" page
        Then There should be a link to download the document
        And I should be able to see the filesize of the document

    Scenario: There is a way to choose a different file if necessary
        When I choose and upload a "legal agreement"
        And  I choose a different file
        Then I should be returned to the "legal-agreement-upload" page

    Scenario: I cannot upload an empty file
        When I choose an empty file
        Then I should not be able to upload the file

