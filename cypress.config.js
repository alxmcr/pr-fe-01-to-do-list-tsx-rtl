import { defineConfig } from "cypress";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

export default defineConfig({
  e2e: {
    baseUrl: `http://localhost:${
      process.env.VITE_APP_PORT || process.env.CYPRESS_VITE_APP_PORT || 4173
    }`,
    supportFile: "cypress/support/e2e.ts",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    screenshotOnRunFailure: true,
    // Improve performance
    numTestsKeptInMemory: 0,
    // CI optimizations
    retries: {
      runMode: 2,
      openMode: 0,
    },
    // Better error handling
    experimentalRunAllSpecs: true,
    // Timeout settings
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000,
  },

  component: {
    supportFile: "cypress/support/component.ts",
    devServer: {
      framework: "react",
      bundler: "vite",
      viteConfig: {
        css: {
          modules: false,
        },
        // Ensure proper module resolution
        resolve: {
          alias: {
            "@": "/src",
          },
        },
      },
    },
    // Component test optimizations
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    screenshotOnRunFailure: true,
  },

  // Global Cypress settings
  watchForFileChanges: false,
  chromeWebSecurity: false,
  experimentalModifyObstructiveThirdPartyCode: true,
});
