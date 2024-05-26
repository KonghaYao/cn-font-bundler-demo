import { pathToFileURL } from "node:url";
import { isAbsolute } from "node:path";
import {
  addTemplate,
  addVitePlugin,
  addPluginTemplate,
  addWebpackPlugin,
  resolveAlias,
  defineNuxtModule,
  useLogger,
} from "@nuxt/kit";
import font from "vite-plugin-font";

export default defineNuxtModule({
  meta: {
    configKey: "fontSplit",
    name: "@nuxtjs/font-split",
  },
  async setup(options, nuxt) {
    // Skip when preparing
    if (nuxt.options._prepare) return;
    addVitePlugin(font(), {
      server: true,
      client: false,
    });
  },
});
