const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "t61arh",
  e2e: {
    chromeWebSecurity: false,
    modifyObstructiveCode : false,
    pageLoadTimeout: 120000,
    defaultCommandTimeout: 10000,
   //retries: 2,
    setupNodeEvents(on, config) {
      const cucumber = require('cypress-cucumber-preprocessor').default;
      const browserify = require('@cypress/browserify-preprocessor');
      const options = {
        ...browserify.defaultOptions,     

      };

      on('file:preprocessor', cucumber(options));
      // implement node event listeners here
    },
    specPattern: 'cypress/**/*.{cy.{js,jsx,ts,tsx},feature}',
  },
  

});
