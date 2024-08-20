import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  base: './', // Nếu bạn đang deploy trên một subpath
});