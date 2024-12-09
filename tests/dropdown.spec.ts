import { test, expect } from '@playwright/test';
import DropdownPage from '../pages/dropdown.page';

test.describe('Dropdown Menu Tests', () => {
  let dropdownPage: DropdownPage;

  test.beforeEach(async ({ page }) => {
    
    dropdownPage = new DropdownPage(page);

    await dropdownPage.navigateTo('/dropdown');

    await expect(dropdownPage.dropdown).toBeVisible();
  });

  test('Verify default option is selected', async () => {

    const defaultOption = await dropdownPage.getSelectedOptionText();
    expect(defaultOption).toBe('Please select an option');
  });

  test('Select an option from the dropdown', async () => {

    await dropdownPage.selectOptionByValue('2');

    const selectedOption = await dropdownPage.getSelectedOptionText();
    expect(selectedOption).toBe('Option 2');
  });

  test.afterEach(async ({ page }) => {

    dropdownPage = new DropdownPage(page);
    await dropdownPage.navigateTo('/');
  });
});
