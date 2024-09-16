const { defineConfig } = require("cypress");
const { readFileSync } = require('fs')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      console.log(config.env)
      const envName = config.env.name || 'dev';
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
