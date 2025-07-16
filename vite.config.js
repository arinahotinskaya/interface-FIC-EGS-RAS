import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/igs-api': {
        target: 'https://files.igs.org',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/igs-api/, ''),
        secure: false,
      },
    },
  },
})
