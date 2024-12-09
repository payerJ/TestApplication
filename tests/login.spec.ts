import { test, expect } from '@playwright/test';
import LoginPage from '../pages/login.page';

test.describe('Login Tests', () => {
  test('Successful login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateTo('/login');
    await loginPage.login('tomsmith', 'SuperSecretPassword!');
    await expect(loginPage.successMessage).toBeVisible();
    await loginPage.navigateTo('/');
  });
});
