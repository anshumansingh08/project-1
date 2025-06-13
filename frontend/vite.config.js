import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ["@emotion/styled"],
  },
  plugins: [
    react({
      jsxRuntime: "automatic",
    }),
  ],
});
