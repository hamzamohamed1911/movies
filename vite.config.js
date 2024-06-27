import MillionLint from "@million/lint";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [MillionLint.vite()],
  server: {
    host: true,
    port: 5173,
  }
});
