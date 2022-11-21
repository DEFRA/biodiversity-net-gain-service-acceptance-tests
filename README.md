# biodiversity-net-gain-service-acceptance-tests

A repository for storing acceptance tests (For regression testing of the Biodiversity Net Gain Register Project)

# **Prerequisites**

You must use Node.js version 14.x or above. Visit Node.js and choose the version for your system.

You must have the Java Development Kit installed. Visit Oracle and choose the version for your system.

Install Node Version Manager.

# **Installation**

First clone the repository and then drop into your new local repo

git clone <https://github.com/DEFRA/biodiversity-net-gain-service-acceptance-tests.git> && cd biodiversity-net-gain-service-acceptance-tests

Next install the dependencies

'npm i'

# **Execution\***

'npm run regression' to run all tests

### Feature tagging

Use tags to run a specific set of tests e.g. 'npm run e2e' to run all tests tagged @e2e

The current tags in use are:

@e2e - UI tests for end to end scenarios which will include submission of the payload to the operator. These will be used in the dev and test environments.
@smoke - UI tests for end to end scenarios. these wil not include submission of the payload to the operator. These will be used for Live environment.
@regression - UI tests used for a full regression. These will be used in test and staging environment.

@new - for local running of specific tests.
@bug - Tagging a test where we know there is a bug in the application
@skip - skips running any scenario, feature, or step tagged with this
