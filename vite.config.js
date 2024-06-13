import { defineConfig } from "vite";
import postcssConfig from "./postcss.config";
import uni from "@dcloudio/vite-plugin-uni";
import uvtw from "@uni-helper/vite-plugin-uni-tailwind";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ["uview-ui"],
  },
  css: {
    postcss: postcssConfig,
  },
  plugins: [uni(), uvtw()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "/src"),
    },
  },
});
