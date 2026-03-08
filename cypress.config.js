const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  env: {
    username: "test@example.com",
    password: "password234",
    apiUrl: "https://api.example.com"
  },        
  e2e: {
    baseUrl: "http://localhost:5173",
    setupNodeEvents(on, config) {
      config.env.username = process.env.USERNAME,
      config.env.password = process.env.PASSWORD
      return config;
    },
    retries: {
      openMode: 0,
      runMode: 2
    }
  },
  viewportWidth: 1280,
  viewportHeight: 720,
});
