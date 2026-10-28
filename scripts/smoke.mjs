// ทดสอบหน้าเว็บทุกหน้าด้วย Playwright: console error, request ที่พัง, รูปที่โหลดไม่ขึ้น, และหน้าล้นจอแนวนอนบนมือถือ
//   npm run build && node scripts/smoke.mjs   (เปิดเซิร์ฟเวอร์เล็กๆ เสิร์ฟ dist/ ให้เอง · หรือส่ง URL ของเซิร์ฟเวอร์อื่นเป็นอาร์กิวเมนต์)
import { chromium } from 'playwright';
import http from 'node:http';
import { readdir, readFile, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { extname, join, relative } from 'node:path';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.png': 'image/png', '.woff2': 'font/woff2', '.woff': 'font/woff', '.json': 'application/json', '.xml': 'application/xml', '.txt': 'text/plain' };
let server;
let base = process.argv[2]?.replace(/\/$/, '');
if (!base) {
  server = http.createServer(async (req, res) => {
    let p = join(dist, decodeURIComponent(req.url.split('?')[0]));
    try { if ((await stat(p)).isDirectory()) p = join(p, 'index.html'); res.writeHead(200, { 'Content-Type': types[extname(p)] || 'application/octet-stream' }); res.end(await readFile(p)); }
    catch { res.writeHead(404); res.end(); }
  }).listen(4398);
  base = 'http://localhost:4398';
}
const pages = [];
async function walk(d) {
  for (const e of await readdir(d, { withFileTypes: true })) {
    if (e.isDirectory()) await walk(join(d, e.name));
    else if (e.name === 'index.html') pages.push('/' + relative(dist, d).replaceAll('\\', '/') + (d === dist ? '' : '/'));
  }
}
await walk(dist);
pages.sort();

let browser;
try { browser = await chromium.launch(); } catch { try { browser = await chromium.launch({ channel: 'chrome' }); } catch { browser = await chromium.launch({ channel: 'msedge' }); } }
const problems = [];
for (const [name, viewport] of [['desktop', { width: 1280, height: 800 }], ['mobile', { width: 375, height: 812 }]]) {
  const ctx = await browser.newContext({ viewport });
  for (const path of pages) {
    const page = await ctx.newPage();
    const issues = [];
    page.on('console', (m) => { if (m.type() === 'error') issues.push('console: ' + m.text().slice(0, 140)); });
    page.on('pageerror', (e) => issues.push('pageerror: ' + e.message.slice(0, 140)));
    page.on('response', (r) => { if (r.status() >= 400 && r.url().startsWith(base)) issues.push(`HTTP ${r.status()}: ${r.url().replace(base, '')}`); });
    await page.goto(base + path, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.querySelectorAll('img[loading="lazy"]').forEach((i) => (i.loading = 'eager')));
    await page.waitForTimeout(600);
    const r = await page.evaluate(() => ({
      broken: [...document.images].filter((i) => i.complete && i.naturalWidth === 0 && i.currentSrc).map((i) => i.currentSrc.split('/').slice(-2).join('/')),
      overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
    }));
    for (const b of r.broken) issues.push('broken image: ' + b);
    if (r.overflow > 1) issues.push(`horizontal overflow ${r.overflow}px`);
    for (const i of issues) problems.push(`[${name}] ${path} → ${i}`);
    await page.close();
  }
  await ctx.close();
}
await browser.close();
server?.close();
console.log(`${pages.length} pages × 2 viewports`);
if (problems.length) { console.log(problems.join('\n')); process.exit(1); }
console.log('✓ no console errors, broken requests/images or horizontal overflow');
