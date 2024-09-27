@regression
Feature: Combined Case Check and Submit
    As a Site Provider
    I need to review all the application details I have provided
    So that I can confirm I am satisfied with all the entered details and submit my application
    @e2e
    Scenario: Complete all combined case details
        Given I choose to manage biodiversity gains
        # // nav bar manage link should really be baseurl
        And I choose to register a gain site and record off site gains at the same time
        And I choose to register a gain site and allocate to a development

        # Applicant info
        And I choose to add "combined-case-applicant-info" details
        And I have completed the "combined-case" applicant information section
        And I am on the "combined-case-written-authorisation-upload" page
        And I upload a "combined-case-written-authorisation" file
        And I confirm it is the correct file
        And I am on the "combined-case-check-applicant-info" page
        And confirm the "combined-case-applicant-info" details are correct
        # land ownership
        And I choose to add "combined-case-land-ownership" details
        And I am on the "combined-case-land-ownership-upload" page
        And I upload a "combined-case-land-ownership" file
        And I confirm it is the correct file
        # And I confirm the correct file
        And I have completed the land-ownership section
# # land boundary
# And I choose to add "land-boundary" details
# And I am on the "land-boundary-upload" page
# And I upload a "land-boundary" file
# And I confirm it is the correct file
# And I have completed the land-boundary section
# # Metric
# And I choose to add "metric" details
# And I am on the "metric-upload" page
# And I upload a "metric" file
# And I confirm it is the correct file
# And I confirm the "check-habitat-baseline" information is correct
# And I confirm the "check-habitat-creation" information is correct
# And I confirm the "check-metric-details" information is correct
# And I should see the "metric" section status as "Completed"
# # Legal Agreement
# And I choose to add "legal-agreement" details
# And I am on the "legal-agreement-type" page
# And I select "Conservation covenant" and continue
# And I am Informed I have to add all "Conservation covenant" files
# And I upload a "legal-agreement" file
# And I confirm it is the correct file
# And I have completed the legal-agreement section
# # Local land Charges
# And I choose to add "local-land-charge" details
# And I am on the "local-land-charge-upload" page
# And I upload a "local-land-charge" file
# And I confirm it is the correct file
# # Confirm all sections complete
# And I confirm I have completed all "landowner" journey sections

# #check and submit page
# And I am on the "check-and-submit" page
# And I have agreed to the terms and conditions