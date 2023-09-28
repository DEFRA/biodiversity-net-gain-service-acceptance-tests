@regression
Feature: Upload Documents

    As a Site Provider
    I need to upload copies of my evidence documents
    So that I can prove that I have met all the eligibility criteria

    Background: start and add applicant details
        Given I navigate to the "start" page
        And I start my registration
        # DefraID
        And I login to the Government Gateway
        And I am logged in to the service

    @skip() #skipped as covered by @e2e tests
    Scenario Outline: <jira ticket> 1 - There is an option of uploading a single <document>
        When I navigate to the "<document>-upload" page
        And I choose and upload a "<document>" file
        And I confirm it is the correct file
        Then I should be on the "<destination>" page
        Examples: Landowner Journey
            | jira ticket | document          | destination                 |
            | BNGP-499    | legal-agreement   | add-legal-agreement-parties |
            | BNGP-765    | management-plan   | habitat-works-start-date    |
            | BNGP-767    | land-boundary     | grid-reference              |
            # | BNGP-526    | geospatial        | check-land-boundary-details |
            | BNGP-524    | metric            | metric-display-baseline     |
            | BNGP-515    | land-ownership    | registered-landowner        |
            | BNGP-3094   | local-land-charge | register-land-task-list     |
        Examples: Developer Journey
            | jira ticket | document          | destination                 |
            | BNGP-738    | developer-metric  | confirm-development-details |
            | BNGP-2195   | consent-agreement | developer/tasklist          |

    Scenario Outline: <jira ticket> 2, 6 - I cannot upload a <document> that is not in the specified format
        When I navigate to the "<document>-upload" page
        And I choose a file type that is not in the specified format
        Then I should not be able to upload the file
        And I am informed of what the allowed file types should be
        Examples:
            | jira ticket | document        |
            | BNGP-499    | legal-agreement |
            | BNGP-765    | management-plan |
            | BNGP-767    | land-boundary   |
            # | BNGP-526    | geospatial      |
            | BNGP-524    | metric          |
            | BNGP-515    | land-ownership  |

    Scenario Outline: <jira ticket> 3 - I can check that the uploaded <document> is the one I wanted to upload before continuing
        When I navigate to the "<document>-upload" page
        And I choose and upload a "<document>" file
        And I am on the "<document>-check" page
        Then There should be a link to download the document
        And I should be able to see the filesize of the document as "<filesize>"
        Examples:
            | jira ticket | document        | filesize |
            | BNGP-499    | legal-agreement | 11.75 kB |
            | BNGP-765    | management-plan | 11.75 kB |
            | BNGP-767    | land-boundary   | 11.75 kB |
            # | BNGP-526    | geospatial      | 1.07 kB  |
            | BNGP-524    | metric          | 5.39 MB  |
            | BNGP-515    | land-ownership  | 11.75 kB |

    Scenario Outline: <jira ticket> 4 - There is a way to choose a different <document> if necessary
        When I navigate to the "<document>-upload" page
        And I choose and upload a "<document>" file
        And  I choose a different file
        Then I should be returned to the "<document>-upload" page
        Examples:
            | jira ticket | document        |
            | BNGP-499    | legal-agreement |
            | BNGP-765    | management-plan |
            | BNGP-767    | land-boundary   |
            # | BNGP-526    | geospatial      |
            | BNGP-524    | metric          |
            | BNGP-515    | land-ownership  |

    Scenario Outline: I cannot upload an empty <document>
        When I navigate to the "<document>-upload" page
        And I choose an empty file
        Then I should not be able to upload the file
        And I am informed that the file is empty
        Examples:
            | document        |
            | legal-agreement |
            | management-plan |
            | land-boundary   |
            # | geospatial      |
            | metric          |
            | land-ownership  |

    Scenario Outline: I cannot continue without uploading a <document>
        When I navigate to the "<document>-upload" page
        And I continue without an action
        Then I should see the error "<message>"
        And I should see the error and the error summary displayed
        Examples:
            | document        | message                                         |
            | legal-agreement | Select a legal agreement                        |
            | management-plan | Select a habitat management and monitoring plan |
            | land-boundary   | Select a file showing the land boundary         |
            # | geospatial      | Select a file showing the land boundary         |
            | metric          | Select a Biodiversity Metric                    |
            | land-ownership  | Select a proof of land ownership file           |

    Scenario Outline: I cannot continue without confirming the uploaded <document>
        When I choose and upload a "<document>" file
        And I am on the "<document>-check" page
        And I continue without an action
        Then I should see the error "Select yes if this is the correct file"
        And I should see the error and the error summary displayed
        Examples:
            | document        |
            | legal-agreement |
            | management-plan |
            | land-boundary   |
            # | geospatial      |
            # todo skip as need to investigate this specific test
            # | metric   |
            | land-ownership  |

    Scenario Outline: I should be able to upload a .<filetype> filetype for <document> files
        When I navigate to the "<document>-upload" page
        Then I should be able to upload a "<document>" file with a filetype of "<filetype>"
        Examples:
            | document        | filetype |
            | legal-agreement | doc      |
            | legal-agreement | docx     |
            | legal-agreement | pdf      |
            | management-plan | doc      |
            | management-plan | docx     |
            | management-plan | pdf      |
            | metric          | xlsx     |
            | metric          | xlsm     |
            | land-ownership  | doc      |
            | land-ownership  | docx     |
            | land-ownership  | pdf      |
            | land-ownership  | doc      |
            | land-ownership  | docx     |
            | land-ownership  | pdf      |
            | land-boundary   | doc      |
            | land-boundary   | docx     |
            | land-boundary   | pdf      |
            | land-boundary   | jpg      |
    # | geospatial      | zip      |
    # | geospatial      | geojson  |
    # | geospatial      | gpkg     |

    Scenario Outline: <jira ticket> 8 I cannot upload a <document> file that is larger than the maximum file size (currently 50MB with 2.43 threshhold that allows for both binary and decimal interpretations of the upload limit)
        When I navigate to the "<document>-upload" page
        And I choose a '<byteType>' file of '<filesize>' or "<byteSize>" Bytes
        Then I should not be able to upload the file
        Examples:
            | jira ticket | document       | byteType | filesize | byteSize |
            | BNGP-515    | land-ownership | decimal  | 52.43MB  | 52430000 |
