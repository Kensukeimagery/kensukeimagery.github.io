// ย่อรูปเป็น WebP 800/1600px แล้วเพิ่มเข้า src/data/images.json ให้อัตโนมัติ
//   node scripts/add-image.mjs <ไฟล์รูป> portraits
//   node scripts/add-image.mjs <ไฟล์รูป> work work-cimb-skywalk
//   node scripts/add-image.mjs <ไฟล์รูป> film --camera "Olympus XA2" --stock "Kodak ColorPlus 200"
// portraits/film = ต่อท้ายลิสต์ (ตั้งชื่อไฟล์ตามลำดับถัดไปให้) · work = ต้องระบุ key
import sharp from 'sharp';
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const [src, group, key] = process.argv.slice(2);
const opts = {};
const argv = process.argv.slice(2);
for (let i = 0; i < argv.length; i++) if (argv[i].startsWith('--')) opts[argv[i].slice(2)] = argv[i + 1];

if (!src || !['portraits', 'film', 'work'].includes(group)) {
  console.error('วิธีใช้: node scripts/add-image.mjs <ไฟล์รูป> <portraits|film|work> [key] [--camera X --stock Y]');
  process.exit(1);
}
const dataFile = fileURLToPath(new URL('../src/data/images.json', import.meta.url));
const outDir = fileURLToPath(new URL('../public/img/', import.meta.url));
const data = JSON.parse(await readFile(dataFile, 'utf8'));

let name;
if (group === 'work') {
  if (!key || key.startsWith('--')) { console.error('group work ต้องระบุ key เช่น work-cimb-skywalk'); process.exit(1); }
  if (data.work[key]) { console.error(`key "${key}" มีอยู่แล้ว`); process.exit(1); }
  name = key;
} else {
  const prefix = group === 'portraits' ? 'portrait' : 'film';
  name = `${prefix}-${String(data[group].length + 1).padStart(2, '0')}`;
}

const img = sharp(src).rotate(); // เคารพ EXIF orientation
const { width: w, height: h } = await img.clone().rotate().toBuffer({ resolveWithObject: true }).then((r) => r.info);
const entry = { w, h, sm: `/img/${name}-800.webp`, lg: `/img/${name}-1600.webp` };
for (const [size, file] of [[800, entry.sm], [1600, entry.lg]]) {
  await img.clone().resize({ width: size, withoutEnlargement: true }).webp({ quality: 80 }).toFile(join(outDir, file.replace('/img/', '')));
}
if (group === 'film') { entry.camera = opts.camera ?? ''; entry.stock = opts.stock ?? ''; }
if (group === 'work') data.work[key] = entry; else data[group].push(entry);
await writeFile(dataFile, JSON.stringify(data, null, 2) + '\n');
console.log(`✓ เพิ่ม ${name} (${w}×${h}) ใน ${group}`);
