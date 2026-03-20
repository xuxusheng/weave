const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  
  page.on('console', msg => {
    if (msg.type() === 'error') console.log('[err]', msg.text().substring(0, 200));
  });
  page.on('pageerror', err => console.log('[pageerr]', err.message.substring(0, 200)));
  page.on('requestfailed', req => console.log('[failed]', req.url().substring(0, 100)));

  await page.goto('http://localhost:5173', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(3000);
  await page.screenshot({ path: '/tmp/openclaw/vite8-1.png' });

  // Check if Monaco loaded
  const hasMonaco = await page.locator('.monaco-editor').count();
  console.log('Monaco editor found:', hasMonaco);

  if (hasMonaco > 0) {
    // Trigger dropdown
    const editor = page.locator('.monaco-editor .view-lines').first();
    await editor.click();
    await page.keyboard.press('Control+End');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.type('通知：{{', { delay: 80 });
    await page.waitForTimeout(1500);
    await page.keyboard.press('Control+Space');
    await page.waitForTimeout(1200);
    await page.screenshot({ path: '/tmp/openclaw/vite8-2-dropdown.png' });

    // Select item
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(150);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(800);
    await page.screenshot({ path: '/tmp/openclaw/vite8-3-selected.png' });
  }

  await browser.close();
  console.log('Done!');
})();
