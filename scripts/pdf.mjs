// สร้างไฟล์เรซูเม่ PDF จากหน้า /resume/ หลัง build (ใช้ใน GitHub Actions)
import { chromium } from 'playwright';
import http from 'node:http';
import { readFile, stat, mkdir } from 'node:fs/promises';
import sharp from 'sharp';
import { extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../dist/', import.meta.url));
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.png': 'image/png',  '.woff2': 'font/woff2', '.woff': 'font/woff' };
// รูปสำหรับ Portfolio PDF: แปลง WebP → JPEG (ไฟล์เล็กกว่ามากเมื่อฝังใน PDF) เฉพาะรูปที่หน้า /portfolio/ ใช้จริง
const pdfImgs = new Set();
for (const f of ['portfolio/index.html', 'en/portfolio/index.html', 'ja/portfolio/index.html', 'card/index.html', 'card-plain/index.html']) {
  const html = await readFile(join(root, f), 'utf8');
  for (const m of html.matchAll(/\/pdf-img\/([^"\s]+?)\.jpg/g)) pdfImgs.add(m[1]);
}
// รูปบนนามบัตรต้องคมชัดกว่ารูปใน Portfolio (พิมพ์จริง) → JPEG คุณภาพสูง ไม่ย่อมาก
const cardImgs = { 'card-portrait': ['img/portrait-13-1600.webp', 1200] };
for (const name of pdfImgs) {
  if (cardImgs[name]) {
    const [src, width] = cardImgs[name];
    await mkdir(join(root, 'pdf-img'), { recursive: true });
    await sharp(join(root, src)).resize({ width, withoutEnlargement: true }).jpeg({ quality: 94, mozjpeg: true }).toFile(join(root, 'pdf-img', name + '.jpg'));
    continue;
  }
  const out = join(root, 'pdf-img', name + '.jpg');
  await mkdir(join(out, '..'), { recursive: true });
  await sharp(join(root, 'img', name + '.webp')).resize({ width: 1400, withoutEnlargement: true }).jpeg({ quality: 80, mozjpeg: true }).toFile(out);
}
console.log('pdf images:', pdfImgs.size);
const server = http.createServer(async (req, res) => {
  let p = join(root, decodeURIComponent(req.url.split('?')[0]));
  try { if ((await stat(p)).isDirectory()) p = join(p, 'index.html'); res.writeHead(200, { 'Content-Type': types[extname(p)] || 'application/octet-stream' }); res.end(await readFile(p)); }
  catch { res.writeHead(404); res.end(); }
}).listen(4399);

// ใช้ CHROMIUM_PATH ถ้าตั้งไว้ ไม่งั้นใช้ Chromium ของ Playwright และถ้าไม่มีก็ใช้ Chrome หรือ Edge ที่ลงในเครื่อง
let browser;
try {
  browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
} catch {
  try { browser = await chromium.launch({ channel: 'chrome' }); }
  catch { browser = await chromium.launch({ channel: 'msedge' }); }
}
const page = await browser.newPage();
for (const [lang, url] of [['th', '/resume/'], ['en', '/en/resume/'], ['ja', '/ja/resume/']]) {
  await page.goto('http://localhost:4399' + url, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({ path: join(root, `resume-${lang}.pdf`), format: 'A4', printBackground: true, preferCSSPageSize: true });
  console.log('wrote', `resume-${lang}.pdf`);
}
// Portfolio PDF หลายหน้า (ปก + ผลงานคัดสรร + ภาพถ่าย) จากหน้า /portfolio/
for (const [lang, url] of [['th', '/portfolio/'], ['en', '/en/portfolio/'], ['ja', '/ja/portfolio/']]) {
  await page.goto('http://localhost:4399' + url, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  // swap to the JPEG versions (much smaller inside a PDF) and wait until they have loaded
  await page.evaluate(() => Promise.all([...document.images].filter((i) => i.dataset.pdf).map((i) => new Promise((done) => { i.onload = i.onerror = done; i.src = i.dataset.pdf; }))));
  await page.pdf({ path: join(root, `portfolio-${lang}.pdf`), format: 'A4', printBackground: true, preferCSSPageSize: true });
  console.log('wrote', `portfolio-${lang}.pdf`);
}
// นามบัตร: PDF สำหรับส่งโรงพิมพ์ (มี bleed 3 มม.) และ PDF ขนาดตัดจริง 90×54 มม. + PNG 600 dpi หน้า/หลัง
for (const [file, url] of [['business-card-print.pdf', '/card/'], ['business-card.pdf', '/card-plain/']]) {
  await page.goto('http://localhost:4399' + url, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(() => Promise.all([...document.images].filter((i) => i.dataset.pdf).map((i) => new Promise((done) => { i.onload = i.onerror = done; i.src = i.dataset.pdf; }))));
  await page.pdf({ path: join(root, file), preferCSSPageSize: true, printBackground: true });
  console.log('wrote', file);
}
const cardShot = await browser.newPage({ viewport: { width: 420, height: 300 }, deviceScaleFactor: 6.25 }); // 90 mm ≈ 340 css px → 2126 px = 600 dpi
await cardShot.emulateMedia({ media: 'print' });
await cardShot.goto('http://localhost:4399/card-plain/', { waitUntil: 'networkidle' });
await cardShot.evaluate(() => document.fonts.ready);
await cardShot.evaluate(() => Promise.all([...document.images].filter((i) => i.dataset.pdf).map((i) => new Promise((done) => { i.onload = i.onerror = done; i.src = i.dataset.pdf; }))));
await cardShot.locator('.front').screenshot({ path: join(root, 'card-front.png') });
await cardShot.locator('.back').screenshot({ path: join(root, 'card-back.png') });
console.log('wrote card-front.png, card-back.png');
// รูปภาพ PNG: หน้า A4 เดียวกับไฟล์ PDF แต่เป็นรูป ความละเอียดสูง (3x ≈ 2382×3369 px) ซูมดูได้คมชัด
const shot = await browser.newPage({ viewport: { width: 794, height: 1123 }, deviceScaleFactor: 3 });
await shot.emulateMedia({ media: 'print' });
for (const [lang, url] of [['th', '/resume/'], ['en', '/en/resume/'], ['ja', '/ja/resume/']]) {
  await shot.goto('http://localhost:4399' + url, { waitUntil: 'networkidle' });
  await shot.evaluate(() => document.fonts.ready);
  await shot.waitForTimeout(300);
  await shot.locator('.sheet').screenshot({ path: join(root, `resume-${lang}.png`) });
  console.log('wrote', `resume-${lang}.png`);
}
await browser.close();
server.close();
