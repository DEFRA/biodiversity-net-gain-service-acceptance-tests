@regression
Feature: land-boundary

    As a Site Provider
    I need to provide the location and boundary of the land I am registering
    So that I can provide the Register Operator with the data in a file type consistent with technology I already use

    Scenario Outline: BNGP-1612 1 - There is an option to upload geospatial and non geospatial data
        Given I navigate to the "choose-land-boundary-upload" page
        When I choose to upload a "<fileType>" file
        Then I should be on the "<section>" page
        Examples:
            | fileType          | section              |
            | geospatial        | geospatial-upload    |
            | Document or Image | land-boundary-upload |