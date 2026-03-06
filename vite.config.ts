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
      { find: '@/app/appContext', replacement: path.resolve(dirname, './src/__mocks__/app-context.tsx') },
      { find: '@/app/utils/auth', replacement: path.resolve(dirname, './src/__mocks__/auth.ts') },
      { find: '@/app/hooks/queries/useUsers', replacement: path.resolve(dirname, './src/__mocks__/use-users.ts') },
      { find: '@/app/hooks/useUserRoles', replacement: path.resolve(dirname, './src/__mocks__/use-user-roles.ts') },
      { find: '@/app/utils/constants', replacement: path.resolve(dirname, './src/__mocks__/constants.ts') },
      { find: '@/app/components/shared/WelcomeToNewUiDialog', replacement: path.resolve(dirname, './src/__mocks__/welcome-dialog.tsx') },
      { find: '@/app/ui/store', replacement: path.resolve(dirname, './src/__mocks__/ui-store.ts') },
      { find: '@/app/components/shared/MobileChat', replacement: path.resolve(dirname, './src/__mocks__/mobile-chat.tsx') },
      { find: '@/app/components/shared/Sidechat/store', replacement: path.resolve(dirname, './src/__mocks__/sidechat-store.ts') },
      { find: '@/app/utils/routes', replacement: path.resolve(dirname, './src/__mocks__/routes.ts') },
      { find: '@/app/components/shared/Citations/CitationListItem', replacement: path.resolve(dirname, './src/__mocks__/citation-list-item.tsx') },
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