import { test, expect } from '@playwright/test';
import HomePage from '../pages/home.page';

test.describe('Home Page Tests', () => {
  test('Verify homepage heading', async ({ page }) => {

    const homePage = new HomePage(page);

    await homePage.navigateTo('/');
    await homePage.verifyHeadingText('Welcome to the-internet');
  });

  test('Verify navigation links are visible', async ({ page }) => {

    const homePage = new HomePage(page);

    await homePage.navigateTo('/');

    const navLinks = await homePage.page.locator('ul li a').allTextContents();
    
    expect(navLinks).toContain('A/B Testing');
    expect(navLinks).toContain('Add/Remove Elements');
    expect(navLinks).toContain('File Download');
  });
});

