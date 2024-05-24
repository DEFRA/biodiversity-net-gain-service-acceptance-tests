@regression
Feature: Biodiversity metric display/playback

        As a Site provider registering a gain site
        I need to be able to view the data from my uploaded metric file
        So that I can check the habitat baseline and created and enhanced habitats I am registering are correct

        Background: start and add applicant details
                Given I navigate to the "metric-upload" page

        Scenario Outline: BNGP-523 1a - The uploaded metric data on the <metricDisplayPage> page has correct totals for <HabitatType>
                And I choose and upload a "metric" file
                And I confirm it is the correct file
                When I navigate to the "<metricDisplayPage>" page
                Then The total for "<HabitatType>" should be "<total>"
                Examples:
                        | metricDisplayPage      | HabitatType                 | total |
                        | check-habitat-baseline | Habitat type and condition  | 4.81  |
                        | check-habitat-baseline | Hedgerow type and condition | 0.30  |
                        | check-habitat-baseline | River type and condition    | 1.00  |
                        | check-habitat-created  | Habitat type and condition  | 4.81  |
                        | check-habitat-created  | Hedgerow type and condition | 0.30  |
                        | check-habitat-created  | River type and condition    | 1.00  |

        Scenario Outline: BNGP-3674 1, 4 metric files that are version <version> are rejected
                # CD08 https://docs.google.com/document/d/1PVBCPrs7ijLhG48Qs9XNEeTqyTYYkU7bjXBNAoyXOaM/edit
                When I choose to upload a "<version>" metric file
                Then I should not be able to upload the file
                And I should see the error "The selected file must use the statutory biodiversity metric"
                Examples:
                        | version |
                        | 3.0     |
                        | 4.0     |

        Scenario: BNGP-524 2, BNGP-4099, BNGP-2912 I cannot upload a file that is not in the specified format (is not a metric file)
                When I choose an empty "metric" file
                Then I should not be able to upload the file
                And I am informed that the selected file is not a valid Metric

        Scenario: BNGP-2031 2 I cannot upload an empty metric file (no data)
                When I choose a metric file with no data
                Then I should not be able to upload the file
                And I am informed that the selected file does not have enough data

        Scenario: BNGP-4700 1 service to only accept published (latest) 4.1 metric version and not the draft version
                When I choose to upload a "Draft 4.1" metric file
                Then I should not be able to upload the file
                And I should see the error "The selected file must not be a draft version"






