// cypress.config.js

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
    },
    retries: {
      runMode: 3, 
      openMode: 3, 
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports',
      charts: true,
      reportPageTitle: 'E-commerce Test Report',
      embeddedScreenshots: true,
      overwrite: false,
      html: false,
      json: true,
      inlineAssets: true
    }
  },
};
