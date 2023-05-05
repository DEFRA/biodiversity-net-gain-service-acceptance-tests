@regression
Feature: Land Boundary

    As a Site Provider
    I need to provide the location and boundary of the land I am registering
    So that I can provide the Register Operator with the data in a file type consistent with technology I already use

    @skip() # temporarily skip test that is running locally pointing to the dev env, but not on ci as this is a superficial test
    Scenario Outline: BNGP-526 1 - There is an option to upload geospatial and non geospatial data
        Given I navigate to the 'choose-land-boundary-upload' page
        When I choose to upload a '<fileType>' file
        Then I should be on the '<section>' page
        Examples:
            | fileType          | section              |
            | geospatial        | geospatial-upload    |
            | Document or Image | land-boundary-upload |
    @skip() #pending
    Scenario: BNGP-1262 I can check that the file I have uploaded for my land boundary is accurate
        Given I navigate to the 'geospatial-upload' page
        And I choose and upload a 'geospatial' file
        And I confirm it is the correct file
        Then I should see the map displayed on the 'check-land-boundary-details' page
    # And The file I have uploaded
    # And the grid refrence as
    # And the Area in hectares as


    @bug @new
    Scenario: BNGP-1711 BUG - geospatial upload error (geojson, repeat upload)
        Given I navigate to the 'geospatial-upload' page
        And I choose and upload a 'geospatial-geojson' file
        And  I choose a different file
        And I am on the 'geospatial-upload' page
        When I choose and upload the same file
        Then I should not see an error message displayed
        And I should be on the 'check-geospatial-file' page