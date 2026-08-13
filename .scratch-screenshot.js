const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto("http://localhost:3001/products/silver", { waitUntil: "networkidle", timeout: 60000 });
  const section = page.locator("#faqs");
  await section.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await section.screenshot({ path: "/Users/s4dge/Desktop/CODE/Buntikki/stoex/stoex-home/.scratch-faq-silver.png" });
  await browser.close();
})();
