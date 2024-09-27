@regression @new
Feature: Land Boundary

    As a Site Provider
    I need to provide the location and boundary of the land I am registering
    So that I can provide the Register Operator with the data in a file type consistent with technology I already use

    @skip() # temporarily skip test that is running locally pointing to the dev env, but not on ci as this is a superficial test
    Scenario Outline: BNGP-526 1 - There is an option to upload geospatial and non geospatial data
        When I navigate to the "choose-land-boundary-upload" page
        And I choose to upload a "<fileType>" file
        Then I should be on the "<section>" page
        Examples:
            | fileType          | section              |
            # | geospatial        | geospatial-upload    |
            | Document or Image | land-boundary-upload |

    @bug @skip() #skip geospatial as currently disabled
    Scenario: BNGP-1711 BUG - geospatial upload error (geojson, repeat upload)
        When I navigate to the "geospatial-upload" page
        And I upload a "geospatial-geojson" file
        And  I choose a different file
        And I am on the "geospatial-upload" page
        And I choose and upload the same file
        Then I should not see an error message displayed
        And I should be on the "check-geospatial-file" page

    @bug
    Scenario Outline: https://eaflood.atlassian.net/browse/BNGP-3755 status not updating when geospatial disabled.
        And I navigate to the "register-land-task-list" page
        And I choose to add "<section>" details
        And I am on the "<section>" page
        When I go back to the previous page
        Then I should see the "<section>" section status as "Not started"
        Examples:
            | section           |
            | land-ownership    |
            | land-boundary     |
            | metric            |
            # | management-plan   |
            | legal-agreement   |
            | local-land-charge |
