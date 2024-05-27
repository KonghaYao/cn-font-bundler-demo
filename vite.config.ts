import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import font from "vite-plugin-font";
export default defineConfig({
  plugins: [sveltekit(), font()],
});
