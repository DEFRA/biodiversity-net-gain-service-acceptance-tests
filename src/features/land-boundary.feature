@regression
Feature: land-boundary

    As a BNG User
    I need to provide the location and boundary of the land I am registering
    So that I can provide the Register Operator with the data in a file type consistent with technology I already use
    @new
    Scenario: There is an option to upload geospatial and non geospatial data
        Given I am on the "choose-land-boundary-upload-option" page
        Then I should be able to choose a "geospatial" option
# And I should be able to choose a "Document orImage" option

# Scenario: I can check that the uploaded file is the one I wanted to upload before continuing

# Scenario: The address, grid reference, and latitude and longitude are accurate

# Scenario: There is an option for me to choose a different way to provide the land boundary after upload.