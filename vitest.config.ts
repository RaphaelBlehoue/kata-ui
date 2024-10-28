import React from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';


export default defineConfig({
  plugins: [React(), tsconfigPaths()],
  resolve: {
    mainFields: ['module', 'main', 'jsnext:main', 'jsnext'],
  },
  test: {
    globals: true,
    include: ['**/*.(test|steps).[jt]s?(x)'],
    watch: false,
    clearMocks: true,
    reporters: ['default'],
    outputFile: 'test-report.xml',
    environment: 'jsdom',
    setupFiles: ['./setupTests.js'],
  },
  define: {},
});