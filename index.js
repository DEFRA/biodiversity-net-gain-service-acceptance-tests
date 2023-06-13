var reporter = require('cucumber-html-reporter');

var options = {
        theme: 'bootstrap',
        jsonDir: '.tmp/cucumberjs-json/',
        output: './reports/index.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        columnLayout: 2,
        failedSummaryReport: true,
    };

    reporter.generate(options);