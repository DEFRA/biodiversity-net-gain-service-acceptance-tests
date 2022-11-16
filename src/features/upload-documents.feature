@regression
Feature: upload documents

    As a Site Provider
    I need to upload copies of my evidence documents
    So that I can prove that I have met all the eligibility criteria

    Scenario Outline: BNGP-499 1 - There is an option of uploading a single <document>
        Given I am on the "<document>-upload" page
        When I choose and upload a "<document>"
        And I confirm it is the correct file
        Then I should be on the "<destination>" page
        @e2e
        Examples:
            | document        | destination                 |
            | legal-agreement | add-legal-agreement-parties |
        Examples:
            | document        | destination              |
            | management-plan | habitat-works-start-date |
            | land-boundary   | grid-reference           |
            | metric          | register-land-task-list  |
            | land-ownership  | add-landowners           |

    Scenario Outline: BNGP-499 2 - I cannot upload a <document> that is not in the specified format
        Given I am on the "<document>-upload" page
        When I choose a file type that is not in the specified format
        Then I should not be able to upload the file
        And I am informed of what the allowed file types should be
        Examples:
            | document        |
            | legal-agreement |
            | management-plan |
            | land-boundary   |
            | metric          |
            | land-ownership  |

    Scenario Outline: BNGP-499 3 - I can check that the uploaded <document> is the one I wanted to upload before continuing
        Given I am on the "<document>-upload" page
        When I choose and upload a "<document>"
        And I am on the "<document>-check" page
        Then There should be a link to download the document
        And I should be able to see the filesize of the document
        Examples:
            | document        |
            | legal-agreement |
            | management-plan |
            | land-boundary   |
            | metric          |
            | land-ownership  |

    Scenario Outline: BNGP-499 4 - There is a way to choose a different <document> if necessary
        Given I am on the "<document>-upload" page
        When I choose and upload a "<document>"
        And  I choose a different file
        Then I should be returned to the "<document>-upload" page
        Examples:
            | document        |
            | legal-agreement |
            | management-plan |
            | land-boundary   |
            | metric          |
            | land-ownership  |

    Scenario Outline: I cannot upload an empty <document>
        Given I am on the "<document>-upload" page
        When I choose an empty file
        Then I should not be able to upload the file
        And I am informed that the file is empty
        Examples:
            | document        |
            | legal-agreement |
            | management-plan |
            | land-boundary   |
            | metric          |
            | land-ownership  |

    Scenario Outline: I cannot continue without uploading a <document>
        Given I am on the "<document>-upload" page
        When I continue without an action
        Then I should see the error "<message>"
        And I should see the error and the error summary displayed
        Examples:
            | document        | message                                         |
            | legal-agreement | Select a legal agreement                        |
            | management-plan | Select a habitat management and monitoring plan |
            | land-boundary   | Select a file showing the land boundary         |
            | metric          | Select a Biodiversity Metric                    |
            | land-ownership  | Select a proof of land ownership file           |

    Scenario Outline: I cannot continue without confirming the uploaded <document>
        Given I choose and upload a "<document>"
        And I am on the "<document>-check" page
        When I continue without an action
        Then I should see the error "Select yes if this is the correct file"
        And I should see the error and the error summary displayed
        Examples:
            | document        |
            | legal-agreement |
            | management-plan |
            | land-boundary   |
            # skip as need to investigate this specific test
            # | metric   |
            | land-ownership  |

    Scenario Outline: I can upload all allowed filetypes
        Then I should be able to upload all allowed filetypes
            | document        | filetype |
            | legal-agreement | doc      |
            | legal-agreement | docx     |
            | legal-agreement | pdf      |
            | management-plan | doc      |
            | management-plan | docx     |
            | management-plan | pdf      |
            | land-boundary   | doc      |
            | land-boundary   | docx     |
            | land-boundary   | pdf      |
            | land-boundary   | jpg      |
            | metric          | xlsx     |
            | metric          | xlsm     |
            | land-ownership  | doc      |
            | land-ownership  | docx     |
            | land-ownership  | pdf      |
            | land-ownership  | DOC      |
            | land-ownership  | DOCX     |
            | land-ownership  | PDF      |
