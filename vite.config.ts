/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: [
      { find: '@/app/hooks/useLocalStorage', replacement: path.resolve(dirname, './src/__mocks__/use-local-storage.ts') },
      { find: '@/app/ui/components/header', replacement: path.resolve(dirname, './src/__mocks__/header.tsx') },
      { find: '@/app/utils/routes', replacement: path.resolve(dirname, './src/__mocks__/routes.ts') },
      { find: '@', replacement: path.resolve(dirname, './src') },
      { find: 'next/link', replacement: path.resolve(dirname, './src/__mocks__/next-link.tsx') },
      { find: 'next/navigation', replacement: path.resolve(dirname, './src/__mocks__/next-navigation.ts') },
      { find: 'next-intl', replacement: path.resolve(dirname, './src/__mocks__/next-intl.ts') },
    ],
  },
  test: {
    projects: [{
      extends: true,
      plugins: [
      // The plugin will run tests for the stories defined in your Storybook config
      // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
      storybookTest({
        configDir: path.join(dirname, '.storybook')
      })],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: playwright({}),
          instances: [{
            browser: 'chromium'
          }]
        },
        setupFiles: ['.storybook/vitest.setup.ts']
      }
    }]
  }
});