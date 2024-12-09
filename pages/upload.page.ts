import { Page, Locator } from '@playwright/test';
import BasePage from './base.page';

export default class UploadPage extends BasePage {
  private fileInput: Locator;
  private uploadButton: Locator;
  private confirmationMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.fileInput = page.locator('#file-upload'); // ID des Datei-Upload-Feldes
    this.uploadButton = page.locator('#file-submit'); // ID des Upload-Buttons
    this.confirmationMessage = page.locator('div.example h3'); // ID der Bestätigung
  }

  async uploadFile(filePath: string) {
    await this.fileInput.setInputFiles(filePath); // Datei auswählen
    await this.uploadButton.click(); 
  }

  async getConfirmationText(): Promise<string> {
    return (await this.confirmationMessage.textContent()) ?? '';
  }
}
