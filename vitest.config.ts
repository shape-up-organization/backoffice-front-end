import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  test: {
    reporters: ['default'],
    coverage: {
      all: true,
      src: ['src'],
      exclude: [
        '__mocks__',
        '**/*.d.ts',
        '**/index.ts',
        '**/*.styles.ts',
        '**/constants',
        '**/theme.ts',
        '**/schema.ts',
      ],
    },
    environment: 'jsdom',
    setupFiles: './config/setup.vitest.ts',
  },
})
