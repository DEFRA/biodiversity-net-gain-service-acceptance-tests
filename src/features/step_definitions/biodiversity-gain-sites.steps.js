const { Given } = require('@wdio/cucumber-framework')
const { startNewRegistrationJourney } = require('../utils/navigationHelper')

Given('I choose to start a new registration', async () => {  
    startNewRegistrationJourney()
})