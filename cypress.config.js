const { defineConfig } = require("cypress");
const { readFileSync } = require('fs')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const envName = config.env.name;
      const text = readFileSync(`environment_configs/${envName}.json`);
      const values = JSON.parse(text);
      config.env = {
          "baseUrl": values.baseUrl
      }
      return config;
    },
  },
  retries:1,

});
