import { test, expect } from '@playwright/test';
import UploadPage from '../pages/upload.page';

test.describe('File Upload Tests', () => {
  test('Verify file upload functionality', async ({ page }) => {
    const uploadPage = new UploadPage(page);

    // Navigiere zur Upload-Seite
    await uploadPage.navigateTo('/upload');


    const filePath = './test-data/sample-file.pdf'; 
    await uploadPage.uploadFile(filePath);


    const confirmationText = await uploadPage.getConfirmationText();
    expect(confirmationText).toContain('File Uploaded!');
  });
});
