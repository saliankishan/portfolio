import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // This is the repository name in the GitHub Pages project-site URL.
  base: "/portfolio/",
  plugins: [react()],
});