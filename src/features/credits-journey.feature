@regression
Feature: Credit Purchase Journey Tests

    As a developer
    I need to be able to see and select credits
    So that i can purchase credits and fulfill my BNG obligations.
    @e2e
    Scenario: Complete all credit application details
        Given I choose to manage my biodiversity gains
        # // nav bar manage link should really be baseurl
        And I choose to manage my statutory biodiversity credit applications
        And I choose to start a new application

        # Statutory biodiversity metric
        And I choose to add "Statutory biodiversity metric" details
        # And I have completed the Statutory biodiversity metric section
        And I am on the "credits-purchase-metric-upload" page
        And I choose and upload a "credits-purchase-metric" file
        And I confirm it is the correct file
        # And I confirm the development details #*****redundant now as is a further development project section on the credits tasklist https://eaflood.atlassian.net/browse/BNGP-4839  #
        And I should see the "credits-purchase-metric" section status as "COMPLETED"

        # Development Information
        And I choose to add "Development Information" details
        And I am on the "development-project-information" page
        And I have completed the Development Information section

        # add Statutory biodiversity credits
        And I choose to add "Statutory biodiversity credit" details
        And I have completed the Statutory biodiversity credits section

        # add purchase order
        And I choose to add "Purchase Order" details
        And I have completed the Purchase Order section

        # add customer due diligence
        And I choose to add "Customer due diligence" details
        And I have completed the Customer due diligence section

        # complete terms and conditions
        And I choose to add "terms and conditions" details
        And I have completed the Terms and conditions section

        # Confirm all sections complete
        And I confirm I have completed all "credits" journey sections

        And I am on the "credits-purchase-check-and-submit" page
        When I submit my application
        Then I should be on the "credits-purchase-application-submitted" page
        And The "biodiversity credit" reference should be displayed

    Scenario Outline: I can add my credits purchase values, for my habitat tiers and see an estimate https://eaflood.atlassian.net/browse/BNGP-2814
        Given I navigate to the "add-credits" page
        When I add a value of "<credits>" to the habitat "<unit>"
        Then I should see the estimated cost of "<value>" for the "<unit>"
        Examples:
            | credits | unit | value    |
            | 1       | A1   | £42,000  |
            | 1       | A2   | £48,000  |
            | 1       | A3   | £66,000  |
            | 1       | A4   | £125,000 |
            | 1       | A5   | £650,000 |
            | 2       | H    | £88,000  |
            | 1       | W    | £230,000 |


#     Scenario: I can add my credits purchase values, for my habitat tiers and see an estimate https://eaflood.atlassian.net/browse/BNGP-2814
#         Given I navigate to the "add-credits" page
#         And I add credits for my application
#             | credits | unit | value  |
#             | 1       | A1   | 42000  |
#             | 1       | A2   | 48000  |
#             | 1       | A3   | 66000  |
#             | 1       | A4   | 125000 |
#             | 1       | A5   | 650000 |
#             | 1       | H    | 44000  |
#             | 1       | W    | 230000 |
# # When I add a value of "<credits>" to the habitat "<unit>"
# # Then I should see the estimated cost of "<value>"
# # And I should see the total estimated cost of ""