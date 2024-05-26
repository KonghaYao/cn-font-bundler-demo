import { defineConfig } from "@farmfe/core";
import font from "vite-plugin-font";
export default defineConfig({
  plugins: ["@farmfe/plugin-react"],
  vitePlugins: [font()],
});
