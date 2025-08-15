import { defineConfig } from "cypress";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

export default defineConfig({
  e2e: {
    baseUrl: `http://localhost:${
      process.env.VITE_APP_PORT || process.env.CYPRESS_VITE_APP_PORT || 3000
    }`,
    supportFile: "cypress/support/e2e.ts",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false,
    screenshotOnRunFailure: false,
    // Improve performance
    numTestsKeptInMemory: 0,
  },
});
