@e2e
Feature: upload documents

    As a Site Provider
    I need to provide copies of my evidence documents
    So that I can prove that I have met all the eligibility criteria
    @new
    Scenario Outline: I can upload the <document>
        Given I am on the "<document>-upload" page
        When I choose and upload a "<document>"
        Then I should be on the "<document>-check" page
        Examples:
            | document        |
            | legal-agreement |
            | management-plan |

    Scenario Outline: I cannot upload a file that is not in the specified format
        Given I am on the "<document>-upload" page
        When I choose a file type that is not in the specified format
        Then I should not be able to upload the file
        And I am informed of what the allowed file types should be
        Examples:
            | document        |
            | legal-agreement |
            | management-plan |

    Scenario Outline: I can check that the uploaded file is the one I wanted to upload before continuing
        Given I am on the "<document>-upload" page
        When I choose and upload a "<document>"
        And I am on the "<document>-check" page
        Then There should be a link to download the document
        And I should be able to see the filesize of the document
        Examples:
            | document        |
            | legal-agreement |
            | management-plan |

    Scenario Outline: There is a way to choose a different file if necessary
        Given I am on the "<document>-upload" page
        When I choose and upload a "<document>"
        And  I choose a different file
        Then I should be returned to the "<document>-upload" page
        Examples:
            | document        |
            | legal-agreement |
            | management-plan |

    Scenario Outline: I cannot upload an empty file
        Given I am on the "<document>-upload" page
        When I choose an empty file
        Then I should not be able to upload the file
        Examples:
            | document        |
            | legal-agreement |
            | management-plan |
