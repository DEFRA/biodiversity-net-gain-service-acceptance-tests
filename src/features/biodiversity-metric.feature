@regression
Feature: Biodiversity metric display/playback

        As a Site provider registering a gain site
        I need to be able to view the data from my uploaded metric file
        So that I can check the habitat baseline and created and enhanced habitats I am registering are correct

        Background: start and add applicant details
                #Start Page
                Given I navigate to the "start" page
                And I start my registration
                # DefraID
                And I login to the Government Gateway
                And I am logged in to the service
                # Landing page - tasklist for new session (TODO refine after)
                And I choose to manage my biodiversity gains
                # And I am on the "manage-biodiversity-gains" page
                And I choose to manage my gain sites
                # And I am on the "biodiversity-gain-sites" page
                And I choose to start a new registration
                And I navigate to the "metric-upload" page

        Scenario Outline: BNGP-523 1a - The uploaded metric data on the <metricDisplayPage> page has correct totals for <HabitatType>
                Given I choose and upload a "metric" file
                And I confirm it is the correct file
                And I navigate to the "<metricDisplayPage>" page
                Then The total for "<HabitatType>" should be "<total>"
                Examples:
                        | metricDisplayPage      | HabitatType                 | total |
                        | check-habitat-baseline | Habitat type and condition  | 5.12  |
                        | check-habitat-baseline | Hedgerow type and condition | 0.30  |
                        | check-habitat-baseline | River type and condition    | 1.00  |
                        | check-habitat-created  | Habitat type and condition  | 5.12  |
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

        Scenario: BNGP-524 2, BNGP 4099 I cannot upload a file that is not in the specified format (is not a metric file)
                When I choose an empty "metric" file
                Then I should not be able to upload the file
                And I am informed that the selected file is not a valid Metric

        Scenario: BNGP-2031 2 I cannot upload an empty metric file (no data)
                When I choose a metric file with no data
                Then I should not be able to upload the file
                And I am informed that the selected file does not have enough data






