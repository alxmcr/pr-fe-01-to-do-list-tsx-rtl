import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: `http://localhost:${process.env.VITE_APP_PORT || 3000}`,
    supportFile: "cypress/support/e2e.ts",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false,
    screenshotOnRunFailure: false,
    // Add options to reduce warnings
    experimentalModifyObstructiveThirdPartyCode: false,
    // Improve performance
    numTestsKeptInMemory: 0,
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    supportFile: "cypress/support/component.ts",
    specPattern: "src/**/*.cy.{js,jsx,ts,tsx}",
  },
  // Global options to reduce warnings
  experimentalInteractiveRunEvents: false,
});
