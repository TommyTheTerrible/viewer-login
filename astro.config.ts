import topLevelAwait from "vite-plugin-top-level-await";
import glsl from "vite-plugin-glsl";
import { defineConfig } from "astro/config";

export default defineConfig({
   base: "/",
   vite: {
      plugins: [glsl(), topLevelAwait()], // top-level await present in the "four" library
   },
});
