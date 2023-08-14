import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "i3s4p5",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
