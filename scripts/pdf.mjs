// สร้างไฟล์เรซูเม่ PDF จากหน้า /resume/ หลัง build (ใช้ใน GitHub Actions)
import { chromium } from 'playwright';
import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join } from 'node:path';

const root = new URL('../dist/', import.meta.url).pathname;
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml' };
const server = http.createServer(async (req, res) => {
  let p = join(root, decodeURIComponent(req.url.split('?')[0]));
  try { if ((await stat(p)).isDirectory()) p = join(p, 'index.html'); res.writeHead(200, { 'Content-Type': types[extname(p)] || 'application/octet-stream' }); res.end(await readFile(p)); }
  catch { res.writeHead(404); res.end(); }
}).listen(4399);

const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
const page = await browser.newPage();
for (const [lang, url] of [['th', '/resume/'], ['en', '/en/resume/']]) {
  await page.goto('http://localhost:4399' + url, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({ path: join(root, `resume-${lang}.pdf`), format: 'A4', printBackground: true, preferCSSPageSize: true });
  console.log('wrote', `resume-${lang}.pdf`);
}
await browser.close();
server.close();
