import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({command}) => {
  return {
    define: {
      isDev: command === "serve"
    },
    plugins: [react()],
  }
})
