const { defineConfig } = require('cypress');
const cucumber = require('@badeball/cypress-cucumber-preprocessor').default;

module.exports = {
  e2e: {
    //specPattern: 'cypress/e2e/Features/*.feature',
    screenshotsFolder: 'cypress/screenshots', //location where all fail screenshots evidences will be stored.
    projectId: "vhdm4z",
    setupNodeEvents(on, config) {
      require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin(on, config);
      return config; 
    },
    browser: 'chrome', //default browser 
  },
  //Reports creator

  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: false,
  }
}

