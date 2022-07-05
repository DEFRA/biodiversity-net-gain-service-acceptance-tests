@regression @skip()
Feature: uploads

    As a BNG User
    I need to be able to upload files and documents to the register
    So that I can prove to the Register Operator that I have met all of the eligibility criteria

    Background:
        Given I am on the "upload-planning-obligation" page
    @e2e
    Scenario: I can upload the planning-obligation document
        When I choose and upload a "planning obligation"
        Then I should be on the "check-planning-obligation" page
        And I should be able to see the filesize of the document
    @e2e
    Scenario: I can check that the uploaded file is the one I wanted to upload before continuing
        When I choose and upload a "planning obligation"
        And I am on the "check-planning-obligation" page
        Then I should be able to see a link to the document
    @e2e
    Scenario: There is a way to choose a different file if necessary
        When I have uploaded and checked a "planning obligation"
        And  I choose a different file
        Then I should be returned to the "upload-planning-obligation" page
        And The original document should be deleted
    @skip()
    #Todo: check this is probably be covered by the unit tests
    Scenario: I cannot upload a file larger than the max file size
        When I choose a document that is larger than "<maxFileSize>" in size
        Then I should not be able to upload the file
        And I am informed that the max file size should be "<maxFileSize>"
    Example:
            | maxFileSize |
            | 50mb        |
    @skip()
    #Todo: check this is probably be covered by the unit tests
    Scenario Outline: I cannot upload an invalid file type
        When I choose a file type that is not allowed
        Then I should not be able to upload the file
        And I am informed of what the allowed file types should be