import { Locator, Page, expect } from '@playwright/test';
import BasePage from './base.page';

export default class HomePage extends BasePage {
  heading: Locator;

  constructor(page: Page) {
    super(page);
    this.heading = page.locator('h1');
  }


  async verifyHeadingText(expectedText: string) {
    await this.heading.waitFor();
    await this.heading.isVisible();
    expect (await this.heading.textContent()).toContain(expectedText);
  }
}
