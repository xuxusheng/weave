const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  page.on('pageerror', err => console.log('[pageerr]', err.message.substring(0, 300)));

  await page.goto('http://localhost:5175', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(3000);
  
  // Click inputs button (no panel open yet)
  const inputsBtn = page.locator('button:has-text("输入参数")');
  await inputsBtn.click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: '/tmp/openclaw/flow-inputs.png' });
  
  // Close panel
  await page.locator('button:has-text("✕")').click();
  await page.waitForTimeout(500);
  
  // Click YAML button
  const yamlBtn = page.locator('button:has-text("YAML")');
  await yamlBtn.click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: '/tmp/openclaw/flow-yaml.png' });

  await browser.close();
  console.log('Done!');
})();
