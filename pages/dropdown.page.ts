import { Locator, Page } from '@playwright/test';
import BasePage from './base.page';

export default class DropdownPage extends BasePage {
  dropdown: Locator;
  selectedOption: Locator;

  constructor(page: Page) {
    super(page);
    this.dropdown = page.locator('#dropdown');
    this.selectedOption = page.locator('#dropdown option:checked');
  }

  async selectOptionByValue(value: string) {
    await this.dropdown.selectOption({ value });
  }

  async getSelectedOptionText(): Promise<string> {
    return await this.selectedOption.textContent() as string;
  }
}
