// const browserstackUser = process.env.BROWSERSTACK_USERNAME;
// const browserstackKey = process.env.BROWSERSTACK_ACCESS_KEY;

const { config: baseConfig } = require('../../wdio.conf.js')

const parallelConfig = {
  capabilities: [
    {
      browserName: 'Chrome',
      browserVersion: '103.0',
      'bstack:options': {
        os: 'Windows',
        osVersion: '11'
      }
    },
    {
      browserName: 'Firefox',
      browserVersion: '102.0',
      'bstack:options': {
        os: 'Windows',
        osVersion: '10'
      }
    },
    {
      browserName: 'Safari',
      browserVersion: '14.1',
      'bstack:options': {
        os: 'OS X',
        osVersion: 'Big Sur'
      }
    }
  ],
  commonCapabilities: {
    'bstack:options': {
      buildName: 'bng-loj-build-1'
    }
  },
  maxInstances: 10
}
exports.config = { ...baseConfig, ...parallelConfig }
// Code to support common capabilities
exports.config.capabilities.forEach(function (caps) {
  for (const i in exports.config.commonCapabilities) { caps[i] = { ...caps[i], ...exports.config.commonCapabilities[i] } }
})
