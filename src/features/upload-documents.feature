@e2e
Feature: upload documents

    As a Site Provider
    I need to upload copies of my evidence documents
    So that I can prove that I have met all the eligibility criteria
    @new
    Scenario Outline: I can upload the <document>
        Given I am on the "<document>-upload" page
        When I choose and upload a "<document>"
        Then I should be on the "<document>-check" page
        Examples:
            | document      |
            # | legal-agreement    |
            # | management-plan    |
            | land-boundary |

    Scenario Outline: I cannot upload a <document> that is not in the specified format
        Given I am on the "<document>-upload" page
        When I choose a file type that is not in the specified format
        Then I should not be able to upload the file
        And I am informed of what the allowed file types should be
        Examples:
            | document      |
            # | legal-agreement    |
            # | management-plan    |
            | land-boundary |


    Scenario Outline: I can check that the uploaded <document> is the one I wanted to upload before continuing
        Given I am on the "<document>-upload" page
        When I choose and upload a "<document>"
        And I am on the "<document>-check" page
        Then There should be a link to download the document
        And I should be able to see the filesize of the document
        Examples:
            | document      |
            # | legal-agreement    |
            # | management-plan    |
            | land-boundary |

    Scenario Outline: There is a way to choose a different <document> if necessary
        Given I am on the "<document>-upload" page
        When I choose and upload a "<document>"
        And  I choose a different file
        Then I should be returned to the "<document>-upload" page
        Examples:
            | document      |
            # | legal-agreement    |
            # | management-plan    |
            | land-boundary |

    Scenario Outline: I cannot upload an empty <document>
        Given I am on the "<document>-upload" page
        When I choose an empty file
        Then I should not be able to upload the file
        Examples:
            | document      |
            # | legal-agreement    |
            # | management-plan    |
            | land-boundary |

    Scenario Outline: I cannot continue without uploading a <document>
        Given I am on the "<document>-upload" page
        When I continue without an action
        Then I should see the error "<message>"
        And I should see the error and the error summary displayed
        Examples:
            | document      | message                                 |
            # | legal-agreement | Select a legal agreement                        |
            # | management-plan | Select a habitat management and monitoring plan |
            | land-boundary | Select a file showing the land boundary |

    Scenario Outline: I cannot continue without confirming the uploaded <document>
        Given I choose and upload a "<document>"
        And I am on the "<document>-check" page
        When I continue without an action
        Then I should see the error "Select yes if this is the correct file"
        And I should see the error and the error summary displayed
        Examples:
            | document      |
            # | legal-agreement    |
            # | management-plan    |
            | land-boundary |
