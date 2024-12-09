import { test, expect } from '@playwright/test';
import DownloadPage from '../pages/download.page';

test.describe('File Download Tests', () => {
  test('Verify file download and return to homepage', async ({ page }) => {
    const downloadPage = new DownloadPage(page);

    await downloadPage.navigateTo('/download');

    const filePath = await downloadPage.downloadFile();
    
    expect(filePath).toBeTruthy();

    await downloadPage.navigateTo('/');
  });
});
