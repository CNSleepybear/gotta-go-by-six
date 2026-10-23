import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { chromium } from 'playwright';

const root = process.cwd();
const shots = path.join(root, 'assets');
fs.mkdirSync(shots, { recursive: true });
const errors = [];
const browser = await chromium.launch({ headless: true });
try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 960 }, deviceScaleFactor: 1, locale: 'en-US', acceptDownloads: true });
  page.on('pageerror', (err) => errors.push(err.message));
  await page.goto(pathToFileURL(path.join(root, 'index.html')).href);
  await page.locator('#modalTitle').waitFor();
  if (!(await page.locator('#modalTitle').innerText()).includes('CAT')) throw Error('English menu not loaded');

  await page.locator('#modalButton').click();
  if ((await page.evaluate(() => window.__commuteTest.state.phase)) !== 'play') throw Error('Play mode failed to start');
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(shots, 'gameplay.png'), fullPage: false });

  await page.evaluate(() => window.__commuteTest.finish(true));
  await page.locator('#openShare').click();
  const url = await page.evaluate(() => window.__commuteTest.poster.url);
  if (!url?.startsWith('data:image/png;base64,')) throw Error('Share poster generation failed');
  fs.writeFileSync(path.join(shots, 'share-poster.png'), Buffer.from(url.split(',')[1], 'base64'));

  await page.locator('#langSwitchShare').click();
  if (!(await page.locator('#shareCaptionPreview').innerText()).includes('六点')) throw Error('Chinese share caption failed');

  const mobile = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1, isMobile: true, hasTouch: true, locale: 'en-US' });
  mobile.on('pageerror', (err) => errors.push(err.message));
  await mobile.goto(pathToFileURL(path.join(root, 'index.html')).href);
  const dims = await mobile.evaluate(() => ({scroll: document.documentElement.scrollWidth, view: innerWidth}));
  if (dims.scroll > dims.view + 1) throw Error('Mobile horizontal overflow');
  await mobile.locator('#modalButton').click();
  if ((await mobile.evaluate(() => window.__commuteTest.state.phase)) !== 'play') throw Error('Mobile start failed');
  if (errors.length) throw Error(errors.join('; '));
  console.log('PASS: gameplay, English, Chinese share, PNG poster, mobile.');
} finally {
  await browser.close();
}
