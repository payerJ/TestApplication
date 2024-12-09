import BasePage from "./base.page";

export default class DownloadPage extends BasePage {
  async downloadFile() {
    const [download] = await Promise.all([
      this.page.waitForEvent("download"),
      this.page.click('a[href*="download/fileUpload.jpg"]'),
    ]);
    const filePath = await download.path();
    console.log(`Die Datei wurde hier gespeichert: ${filePath}`);
    return await download.path();
  }
}
