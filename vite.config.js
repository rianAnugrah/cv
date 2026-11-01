import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// `base: "./"` keeps built asset and data URLs relative so the same `dist/`
// works at a domain root or under a GitHub Pages project subpath.
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
});
