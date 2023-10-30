const { defineConfig } = require("cypress");
const { downloadFile } = require("cypress-downloadfile/lib/addPlugin");
module.exports = {
  e2e: {
    baseurl: "https://www.saucedemo.com",
    defaultCommandTimeout: 6000,
    setupNodeEvents(on, config) {
      fullyparallel: true;
      // implement node event listeners here
      on("task", { downloadFile });
    },
    reporters: [
      "spec",
      [
        "allure",
        {
          outputDir: "allure-results",
          disableWebdriverStepsReporting: false,
          disableWebdriverScreenshotsReporting: false,
        },
      ],
    ],
  },
};
