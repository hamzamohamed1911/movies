import MillionLint from "@million/lint";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    MillionLint.vite(),
    // Other plugins if any
  ],
  server: {
    host: true, // Use the default host
    port: 5173, // Specify the desired port
  },
});
