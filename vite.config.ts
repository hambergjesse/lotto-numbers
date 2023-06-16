import million from "million/compiler";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [million.vite({ mode: "preact" })],
});
