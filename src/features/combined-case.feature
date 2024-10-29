@regression
Feature: Combined Case Check and Submit
        As a combined case user
        I need to review all the application details I have provided
        So that I can confirm my details and submit my application

        @e2e
        Scenario: Complete all combined case details
                Given I choose to manage biodiversity gains
                And I choose to register a gain site and record off site gains at the same time
                And I choose to register a gain site and allocate to a development
                ## Registration section
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
                And I have completed the "combined-case" land-ownership section
                # land boundary
                And I choose to add "combined-case-land-boundary" details
                And I am on the "combined-case-land-boundary-upload" page
                And I upload a "combined-case-land-boundary" file
                And I confirm it is the correct file
                And I have completed the land-boundary section
                # Metric
                And I choose to add "combined-case-metric" details
                And I am on the "combined-case-metric-upload" page
                And I upload a "combined-case-metric" file
                And I confirm it is the correct file
                And I confirm the "check-habitat-baseline" information is correct
                And I confirm the "check-habitat-creation" information is correct
                And I confirm the "check-metric-details" information is correct
                And I should see the "combined-case-metric" section status as "Completed"
                # Legal Agreement
                And I choose to add "combined-case-legal-agreement" details
                And I am on the "combined-case-legal-agreement-type" page
                And I select "Conservation covenant" and continue
                And I am informed I have to add all "Conservation covenant" files
                And I upload a "combined-case-legal-agreement" file
                And I confirm it is the correct file
                And I have completed the legal-agreement section
                # Local land Charges
                And I choose to add "combined-case-local-land-charge" details
                And I am on the "combined-case-local-land-charge-upload" page
                And I upload a "combined-case-local-land-charge" file
                And I confirm it is the correct file

                ### Allocation Section
                # Upload planning decision notice
                And I choose to add "combined case planning decision notice" details
                And I upload a "combined-case-planning-decision-notice" file
                And I confirm it is the correct file

                # Add development project details
                And I choose to add "combined case Development Project" details
                And I am on the "combined-case-development-project-details" page
                And I have completed the "combined-case" Development Information section

                And I choose to add "combined-case-developer-metric" details
                And I upload a "combined-case-developer-metric" file
                And I confirm it is the correct file
                And I match my habitats

                # Submit your combined case information
                And I confirm I have completed all "combined-case" journey sections
                And I am on the "combined-case-check-and-submit" page
                And I have agreed to the terms and conditions
                When I submit my application
                Then I should be on the "application-submitted" page
                And The "biodiversity gain site" reference should be displayed
                And The fee amount of "£639.00" should be displayed
                And The sort code "60 70 80" should be displayed
                And The account number "10026630" should be displayed
                And The swift code "NWBKGB2L" should be displayed
