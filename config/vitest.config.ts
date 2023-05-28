import path from 'path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  test: {
    alias: {
      components: path.resolve(__dirname, '../src/components'),
      contexts: path.resolve(__dirname, '../src/contexts'),
      hooks: path.resolve(__dirname, '../src/hooks'),
      utils: path.resolve(__dirname, '../src/utils'),
    },
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
        '**/makeStyles.ts',
      ],
    },
    environment: 'jsdom',
    reporters: ['default'],
    setupFiles: './config/setup.vitest.ts',
  },
})
