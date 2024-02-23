const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl : "https://magento.softwaretestingboard.com/",
    watchForFileChanges: false,
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
