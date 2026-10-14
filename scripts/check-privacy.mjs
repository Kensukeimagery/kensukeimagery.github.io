// ตรวจว่าไม่มีข้อมูลต้องห้ามหลุดไปในเว็บที่ build แล้ว (รันหลัง build: npm run check)
// กฎ: ไม่แสดง LINE ID, ไม่แสดงวันเกิดเต็ม, ไม่แสดงเงินเดือน
import { readdir, readFile } from 'node:fs/promises';
import { join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { person } from '../src/data/profile.js';

const root = fileURLToPath(new URL('../dist/', import.meta.url));
const rules = [
  ['วันเกิดเต็ม', new RegExp(person.birthDate.replace(/-/g, '[-/.]'))],
  ['LINE ID', /line\.me|lin\.ee|line\s*id|ไลน์\s*ไอดี/i],
  ['เงินเดือน', /salary|เงินเดือน/i],
];
const exts = new Set(['.html', '.js', '.css', '.json', '.xml', '.txt']);

async function* walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else if (exts.has(extname(p))) yield p;
  }
}

let bad = 0;
for await (const f of walk(root)) {
  const text = await readFile(f, 'utf8');
  for (const [name, re] of rules) {
    const m = text.match(re);
    if (m) { bad++; console.error(`✗ ${name} พบใน ${f.slice(root.length)}: "${m[0]}"`); }
  }
}
if (bad) { console.error(`\nพบข้อมูลต้องห้าม ${bad} จุด — หยุด deploy`); process.exit(1); }
console.log('✓ ตรวจความเป็นส่วนตัวผ่าน (ไม่มีวันเกิดเต็ม / LINE ID / เงินเดือน)');
