const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  page.on('pageerror', err => console.log('[pageerr]', err.message.substring(0, 300)));
  page.on('requestfailed', req => console.log('[failed]', req.url().substring(0, 120)));

  await page.goto('http://localhost:5175', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(3000);
  await page.screenshot({ path: '/tmp/openclaw/flow-1.png' });

  // Click on a node
  const node = page.locator('.react-flow__node').first();
  if (await node.count() > 0) {
    await node.click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: '/tmp/openclaw/flow-2-panel.png' });
  }

  // Click inputs button
  const inputsBtn = page.locator('button:has-text("输入参数")').first();
  if (await inputsBtn.count() > 0) {
    await inputsBtn.click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: '/tmp/openclaw/flow-3-inputs.png' });
    await inputsBtn.click();
  }

  // Click YAML button
  const yamlBtn = page.locator('button:has-text("YAML")').first();
  if (await yamlBtn.count() > 0) {
    await yamlBtn.click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: '/tmp/openclaw/flow-4-yaml.png' });
  }

  await browser.close();
  console.log('Done!');
})();
