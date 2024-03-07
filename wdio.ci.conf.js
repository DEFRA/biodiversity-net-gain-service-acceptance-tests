const basicConfig = require("./wdio.conf");

// Need longer timeout for dev environment uploads to pass AV scanning
basicConfig.config.cucumberOpts.timeout = 300000

exports.config = {
  ...basicConfig.config,
  // We only need to override the Chrome configuration of capabilities
  capabilities: [
    {
      maxInstances: 10,
      browserName: "chrome",
      browserVersion: "122.0.6258.0",
      acceptInsecureCerts: true,
      // We need to extends some Chrome flags in order to tell Chrome to run headless
      "goog:chromeOptions": {
        args: ["--headless", "--disable-gpu", "--disable-dev-shm-usage"],
      },
    },
  ],

  logLevel: "error",

  reporters: [
    'spec',
    ['junit', {
      outputDir: './',
      outputFileFormat: function (options) {
        return `TEST-${options.cid}.xml`
      }
    }]
  ],
  baseUrl: process.env.SERVICE_URL
};
