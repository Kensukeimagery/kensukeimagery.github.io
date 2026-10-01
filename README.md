# Ken Suthat — Portfolio

เว็บ portfolio + résumé สองภาษา (ไทย/อังกฤษ) สร้างด้วย [Astro](https://astro.build)

- เว็บจริง: https://kensukeimagery.github.io
- branch `main` = โค้ดต้นฉบับ — ทุกครั้งที่ push, GitHub Actions จะ build และ deploy เว็บให้อัตโนมัติ (`.github/workflows/deploy.yml`)

## แก้ไขข้อมูล
| อยากแก้ | ไฟล์ |
|---|---|
| ข้อมูลส่วนตัว, ประวัติทำงาน, การศึกษา, รางวัล, ช่องทางติดต่อ | `src/data/profile.js` |
| ผลงาน / วิดีโอ / ลิงก์อ้างอิง | `src/data/works.js` |
| รูปภาพ (รายการรูป) | `src/data/images.json` + ไฟล์ใน `public/img/` (ขนาด 800 และ 1600 px, WebP) |
| ข้อความเมนู/ปุ่ม | `src/data/i18n.js` |
| สี ฟอนต์ ดีไซน์ | `src/styles/global.css` |

## ทดสอบในเครื่อง
```bash
npm install
npm run dev          # เปิด http://localhost:4321
```
