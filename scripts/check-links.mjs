// ตรวจลิงก์ภายในเว็บที่ build แล้ว: ทุก href/src ที่ขึ้นต้นด้วย / ต้องมีไฟล์จริง และทุกหน้าต้องมี <title>, lang, canonical
// (ไฟล์ที่สร้างทีหลังด้วย npm run pdf ข้ามการตรวจ) — รันหลัง build: npm run check
import { readdir, readFile, stat } from 'node:fs/promises';
import { join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../dist/', import.meta.url));
const generatedLater = [/^\/resume-(th|en|ja)\.(pdf|png)$/, /^\/portfolio-(th|en|ja)\.pdf$/, /^\/pdf-img\//];

async function* walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else yield p;
  }
}
const exists = async (p) => { try { await stat(p); return true; } catch { return false; } };

let bad = 0;
const fail = (msg) => { bad++; console.error('✗ ' + msg); };
let pages = 0;
for await (const f of walk(root)) {
  if (extname(f) !== '.html') continue;
  pages++;
  const rel = f.slice(root.length);
  const html = await readFile(f, 'utf8');
  if (!/<title>[^<]+<\/title>/.test(html)) fail(`${rel}: ไม่มี <title>`);
  if (!/<html[^>]*\slang="(th|en|ja)"/.test(html)) fail(`${rel}: ไม่มี lang`);
  if (!rel.includes('resume') && !rel.includes('portfolio') && !/rel="canonical"/.test(html)) fail(`${rel}: ไม่มี canonical`);
  for (const m of html.matchAll(/\s(?:href|src)="(\/[^"#?]*)/g)) {
    const url = decodeURIComponent(m[1]);
    if (url.startsWith('//') || generatedLater.some((re) => re.test(url))) continue;
    const target = join(root, url);
    const ok = (await exists(target) && (extname(target) || await exists(join(target, 'index.html')))) || (await exists(join(target, 'index.html')));
    if (!ok) fail(`${rel}: ลิงก์เสีย ${url}`);
  }
}
if (bad) { console.error(`\nพบปัญหา ${bad} จุด`); process.exit(1); }
console.log(`✓ ตรวจลิงก์ภายในและ meta ผ่าน (${pages} หน้า)`);
