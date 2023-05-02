import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
import path from 'path'


export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@atoms': path.resolve(path.dirname, './src/components/atoms'),
        '@molecules': path.resolve(path.dirname, './src/components/molecules'),
        '@organisms': path.resolve(path.dirname, './src/components/organisms'),
        '@templates': path.resolve(path.dirname, './src/components/templates'),
        '@pages': path.resolve(path.dirname, './src/pages'),
    }
  }
})
