@regression
Feature: Upload Documents

    As a Site Provider
    I need to upload copies of my evidence documents
    So that I can prove that I have met all the eligibility criteria

    Background: Start new registration
        Given I choose to manage biodiversity gains
        And I choose to manage my gain sites
        And I choose to start a new registration

    Scenario Outline: <jira ticket> 2, 6 - I cannot upload a <document> that is not in the specified format
        When I choose to add "<document>" details
        And I choose a file type that is not in the specified format for the "<document>"
        Then I should not be able to upload the file
        And I am informed of what the allowed file types should be
        Examples:
            | jira ticket | document        |
            | BNGP-499    | legal-agreement |
            | BNGP-767    | land-boundary   |
            # | BNGP-526    | geospatial      |
            | BNGP-524    | metric          |
            | BNGP-515    | land-ownership  |

    Scenario Outline: <jira ticket> 3 - I can check that the uploaded <document> is the one I wanted to upload before continuing
        When I choose to add "<document>" details
        And I upload a "<document>" file
        And I am on the "<document>-check" page
        Then There should be a link to download the "<document>"
        And I should be able to see the filesize of the document as "<filesize>"
        And I can download the "<document>"
        Examples:
            | jira ticket | document        | filesize |
            | BNGP-499    | legal-agreement | 11.75 kB |
            | BNGP-767    | land-boundary   | 11.75 kB |
            # | BNGP-526    | geospatial      | 1.07 kB  |
            | BNGP-524    | metric          | 3.51 MB  |
            | BNGP-515    | land-ownership  | 11.75 kB |

    Scenario Outline: <jira ticket> 4 - There is a way to choose a different <document> if necessary
        When I choose to add "<document>" details
        And I upload a "<document>" file
        And I choose a different file
        Then I should be returned to the "<document>-upload" page
        Examples:
            | jira ticket | document        |
            | BNGP-499    | legal-agreement |
            | BNGP-767    | land-boundary   |
            # | BNGP-526    | geospatial      |
            | BNGP-524    | metric          |
            | BNGP-515    | land-ownership  |

    Scenario Outline: I cannot upload an empty <document>
        When I choose to add "<document>" details
        And I choose an empty "<document>" file
        Then I should not be able to upload the file
        And I am informed that the file is empty
        Examples:
            | document        |
            | legal-agreement |
            | land-boundary   |
            # | geospatial      |
            | land-ownership  |

    # https://eaflood.atlassian.net/browse/BNGP-4756
    Scenario Outline: I cannot continue without uploading a <document>
        When I choose to add "<document>" details
        And I try to upload a "<document>" without choosing a file
        Then I should see the error "<message>"
        And I should see the error and the error summary displayed
        Examples:
            | document        | message                                 |
            | legal-agreement | Select a legal agreement                |
            | land-boundary   | Select a file showing the land boundary |
            # | geospatial      | Select a file showing the land boundary         |
            | metric          | Select a statutory biodiversity metric  |
            | land-ownership  | Select a proof of land ownership file   |

    Scenario Outline: I cannot continue without confirming the uploaded <document>
        When I choose to add "<document>" details
        And I upload a "<document>" file
        And I am on the "<document>-check" page
        And I continue without an action
        Then I should see the error "Select yes if this is the correct file"
        And I should see the error and the error summary displayed
        Examples:
            | document        |
            | legal-agreement |
            | land-boundary   |
            # | geospatial      |
            | metric          |
            | land-ownership  |
    @new
    Scenario Outline: I should be able to upload and download .<filetype> filetype for <document> files
        When I choose to add "<document>" details
        Then I should be able to upload a "<document>" file with a filetype of "<filetype>"
        And I can download the "<document>"
        Examples:
            | document        | filetype |
            | legal-agreement | doc      |
            | legal-agreement | docx     |
            | legal-agreement | pdf      |
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

    @skip()
    Scenario Outline: <jira ticket> 8 I cannot upload a <document> file that is larger than the maximum file size (currently 50MB with 2.43 threshhold that allows for both binary and decimal interpretations of the upload limit)
        When I choose to add "<document>" details
        And I choose a '<byteType>' file of '<filesize>' or "<byteSize>" Bytes
        Then I should not be able to upload the file
        Examples:
            | jira ticket | document       | byteType | filesize | byteSize |
            | BNGP-515    | land-ownership | decimal  | 52.43MB  | 52430000 |
    @skip()
    Scenario: BNGP-3637 malware/virus uploads should display the error message
        When I choose to add "local-land-charge" details
        And I am on the "local-land-charge-upload" page
        And I upload a file that contains malware or a virus
        Then I should not be able to upload the file
        And I should see the error "The selected file contains a virus"



