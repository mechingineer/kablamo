import { defineConfig } from '@playwright/test';

export default defineConfig({
  
  testDir: 'src/tests',
  use: {
    baseURL: 'https://www.bankofcanada.ca/valet/',
  },
  reporter: [
    ['html', { outputFolder: 'reports'}]
  ],
});
