import path from "path"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
plugins: [react(), tailwindcss()],
resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

})
