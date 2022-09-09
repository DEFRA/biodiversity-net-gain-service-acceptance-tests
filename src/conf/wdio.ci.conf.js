const basicConfig = require("../../wdio.conf");

exports.config = {
  ...basicConfig.config,
  // We only need to override the Chrome configuration of capabilities
  capabilities: [
    {
      maxInstances: 5,
      browserName: "chrome",
      acceptInsecureCerts: true,
      // We need to extends some Chrome flags in order to tell Chrome to run headless
      "goog:chromeOptions": {
        args: ["--headless", "--disable-gpu", "--disable-dev-shm-usage"],
      },
    },
  ],

  services: [
    "selenium-standalone",
    {
      logPath: "logs",
      installArgs: { drivers: { chrome: { version: "103.0.5060.53" } } },
      args: { drivers: { chrome: { version: "103.0.5060.53" } } },
    },

    "chromedriver",
  ],

  baseUrl: process.env.SERVICE_URL || "http://localhost:3000",
};
