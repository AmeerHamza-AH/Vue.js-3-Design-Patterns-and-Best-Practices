import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

// import basicSSL from "@vitejs/plugin-basic-ssl"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()]
});
