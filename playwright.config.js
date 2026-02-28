// @ts-check
import { defineConfig, devices } from '@playwright/test';
/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = defineConfig({
  testDir: './tests',
  retries: 1,
  expect: {
    timeout: 5000,
  },
  reporter: "html",
  projects: [{

    name: "Chrome",
    use: {
      browserName: "chromium",
      channel: 'chrome',
      headless: true,
      screenshot: "only-on-failure",
      trace: "retain-on-failure",
      video: "retain-on-failure",
      ignoreHTTPSErrors: true,
      permissions: ["geolocation"],
      //...devices["iPhone 15 Pro"],
      //viewport: null,//{ width: 720, height: 720 },
      launchOptions: {
        args: [
          '--disable-notifications',
          '--disable-save-password-bubble',
          '--disable-infobars'
        ]
      }


    }

  }
]


});

module.exports = config