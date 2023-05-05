const reporter = require('cucumber-html-reporter');

const options = {
    brandTitle: 'Biodiversity Net Gain',
    name: 'Front End Acceptance Tests',
    theme: 'bootstrap',
    jsonDir: 'reports/cucumberJson',
    output: 'reports/index.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: false,
    launchReport: true,
    columnLayout: 2,
    metadata: {
      'App Version': '2.10.0',
      'Test Environment': 'Development'
    }
  };
  reporter.generate(options);

    reporter.generate(options);