@regression @new
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
                #Landing page - tasklist for new session (TODO refine after)
                And I choose to manage my biodiversity gains
                # And I am on the "manage-biodiversity-gains" page
                And I choose to manage my gain sites
                # And I am on the "biodiversity-gain-sites" page
                And I choose to start a new registration
                And I navigate to the "metric-upload" page
                And I choose and upload a "metric" file
                And I confirm it is the correct file

        Scenario Outline: BNGP-523 1a - The uploaded metric data on the <metricDisplayPage> page has correct totals for <HabitatType>
                Given I navigate to the "<metricDisplayPage>" page
                Then The total for "<HabitatType>" should be "<total>"
                Examples:
                        | metricDisplayPage      | HabitatType                 | total |
                        | check-habitat-baseline | Habitat type and condition  | 5.12  |
                        | check-habitat-baseline | Hedgerow type and condition | 0.30  |
                        | check-habitat-baseline | River type and condition    | 1.00  |
                        | check-habitat-created  | Habitat type and condition  | 5.12  |
                        | check-habitat-created  | Hedgerow type and condition | 0.30  |
                        | check-habitat-created  | River type and condition    | 1.00  |

