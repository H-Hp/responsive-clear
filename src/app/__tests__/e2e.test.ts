import { chromium } from 'playwright';

describe('E2E test', () => {
  it('should open the homepage', async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000');
    await expect(page.title()).resolves.toMatch('Next.js!');
    await browser.close();
  });
});
