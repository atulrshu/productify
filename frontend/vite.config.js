import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server:{
    port:5172, // force the port to 5172
    strictPort:true, // If 5172 is busy, failed instead of jumping to 5173
  },
})
