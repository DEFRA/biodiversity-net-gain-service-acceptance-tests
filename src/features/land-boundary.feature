@regression @skip()
Feature: land-boundary

    As a Site Provider
    I need to provide the location and boundary of the land I am registering
    So that I can provide the Register Operator with the data in a file type consistent with technology I already use

    Scenario Outline: There is an option to upload geospatial and non geospatial data
        Given I navigate to the "location-options" page
        Then I should be able to choose to upload a geospatial file
        And I should be able to choose to upload an Image file
    # When I choose and upload a "<fileType>"
    # Then I should be on the "<section>" page
    # Examples:
    #     | fileType   | section                |
    #     | geospatial | upload-geospatial-file |
    # | Document or Image | upload-image-file |

    Scenario: I can check that the uploaded file is the one I wanted to upload before continuing

    Scenario: The address, grid reference, and latitude and longitude are accurate

    Scenario: There is an option for me to choose a different way to provide the land boundary after upload.