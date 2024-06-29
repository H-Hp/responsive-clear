import { test, expect } from 'playwright/test';

test('should navigate to the about page', async ({ page }) => {
  // Start from the index page
  await page.goto('/');

  // Find an element with the text 'About' and click on it
  await page.click('text=レスポンシブチェック');

  // The new url should be "/about" (baseURL is used there)
  //await expect(page).toHaveURL('/about');

  // The new page should contain an h1 with "About Page"
  //await expect(page.locator('h1')).toContainText('About Page');
});