import { Locator, Page } from '@playwright/test';
import BasePage from './base.page';

export default class LoginPage extends BasePage {
  usernameInput: Locator;
  passwordInput: Locator;
  loginButton: Locator;
  successMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('button[type="submit"]');
    this.successMessage = page.locator('.success');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
