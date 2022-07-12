@regression
Feature: land-boundary

    As a BNG User
    I need to upload a geospatial file of my biodiversity gain site
    So that I can provide the location, area, and boundary of the land I am registering in a single spatial format

    Scenario: There is an option to upload geospatial and non geospatial data
        Given I am on the "choose-land-boundary-upload-option" page
        Then I should be able to choose a "geospatial" option
        And I should be able to choose a "Document or Image" option

    @new
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

