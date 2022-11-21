@regression
Feature: land-boundary

    As a Site Provider
    I need to provide the location and boundary of the land I am registering
    So that I can provide the Register Operator with the data in a file type consistent with technology I already use

    @new
    Scenario Outline: There is an option to upload geospatial and non geospatial data
        Given I am on the "location-options" page
        Then I should be able to choose to upload a geospatial file
        And I should be able to choose to upload an Image file
    # When I choose and upload a "<fileType>"
    # Then I should be on the "<section>" page
    # Examples:
    #     | fileType   | section                |
    #     | geospatial | upload-geospatial-file |
    # | Document or Image | upload-image-file |

    Scenario: I can check that the uploaded file is the one I wanted to upload before continuing
        Given I am on the "upload-geospatial" page
        When I choose and upload a "geospatial document"
        And I am on the "confirm-land-boundary" page
# Then I should be able to see a link to the document

# Scenario: The address, grid reference, and latitude and longitude are accurate

# Scenario: There is an option for me to choose a different way to provide the land boundary after upload.

# I cannot upload a file that is not in the specified format (see tech notes and questions to resolve above)


# There is a way to choose a different file if necessary

# I can delete any uploaded files if loaded in error

# I am informed if the file type selected is incorrect and cannot be uploaded

# I cannot upload a file that is larger than the maximum file size (50Mb)

# I can confirm my uploaded land boundary file is correct (before continuing)

