import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',  // ← CHANGED
  timeout: 30_000,
  retries: 1,
  reporter: [['html'], ['list']],
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10_000,
    ignoreHTTPSErrors: true,
    video: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});