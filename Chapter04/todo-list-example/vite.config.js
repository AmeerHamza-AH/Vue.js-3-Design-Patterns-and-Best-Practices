import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import path from "path"
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
        "@components": path.resolve(__dirname, "src", "components")
    }
  }
});
