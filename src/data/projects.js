// โปรเจกต์ส่วนตัว / งานอดิเรกด้านไอที — แสดงท้ายหน้าโปรไฟล์ เป็นการ์ดเด่น (ไม่ใช่งานหลักของพอร์ต)
// เพิ่มโปรเจกต์ใหม่: คัดลอกบล็อกด้านล่างแล้วแก้ข้อมูล · ภาพประกอบ = คีย์ใน images.json (กลุ่ม work)
// ข้อมูลจริงอ้างอิงจาก README ของโปรเจกต์บน GitHub (จำนวนค่าปรับแต่ง, จุดเด่น, ลิงก์ดาวน์โหลด)
export const projects = [
  {
    title: 'Windows 11 Optimizer',
    year: '2026',
    tagline: {
      th: 'ปรับ Windows 11 ให้เล่นเกมลื่นขึ้น โดยไม่ต้องกลัวพัง',
      en: 'Tune a Windows 11 gaming PC without the fear of breaking it.',
    },
    desc: {
      th: 'ชุดสคริปต์ปรับแต่ง Windows 11 สำหรับเล่นเกม แบบโปร่งใส ทุกการแก้ไขอยู่ในไฟล์ .reg ที่อ่านได้ สำรองค่าเดิมก่อนแก้ ย้อนกลับได้ทีละรายการ และตรวจสถานะได้ มีคู่มือภาษาไทยและอังกฤษ',
      en: 'Transparent Windows 11 gaming tweaks — every change is a readable .reg file, backed up first and revertible one by one, with a status check and Thai/English manuals.',
    },
    points: {
      th: [
        'ปุ่มเดียว (Easy Setup) ทำให้ครบตามลำดับที่ถูกต้อง',
        'สร้างจุดคืนค่าก่อนเสมอ และทุกการปรับมีไฟล์ย้อนกลับของตัวเอง',
        'สคริปต์เป็นข้อความธรรมดา เปิดอ่านได้ก่อนรัน',
        'ไม่ลบไฟล์ ไม่แตะไฟล์เกม ไม่ส่งข้อมูลออกไปไหน',
      ],
      en: [
        'One button (Easy Setup) runs everything in the right order',
        'A restore point comes first, and every tweak has its own undo file',
        'Plain-text scripts you can read before you run them',
        'Deletes nothing, leaves game files alone, sends no data anywhere',
      ],
    },
    facts: [
      { value: '16', label: { th: 'ค่าปรับแต่งที่มีเอกสารรองรับ', en: 'documented tweaks' } },
      { value: 'TH · EN', label: { th: 'คู่มือ 2 ภาษา', en: 'manuals' } },
      { value: 'MIT', label: { th: 'โอเพนซอร์ส ใช้ฟรี', en: 'open source, free' } },
    ],
    note: {
      th: 'ตรงไปตรงมา: ผลต่อ FPS ไม่มาก และขึ้นกับแต่ละเกม ไดรเวอร์การ์ดจอ การตั้งค่าในเกม และความเย็นสำคัญกว่า — จึงไม่สัญญาตัวเลข',
      en: 'Honest take: the FPS gain is small and depends on the game. GPU drivers, in-game settings and cooling matter far more — so there are no promised numbers.',
    },
    images: ['proj-win11-menu', 'proj-win11-plan', 'proj-win11-status'],
    tags: ['Windows 11', 'Batch', 'Registry', 'Open source (MIT)'],
    url: 'https://github.com/Kensukeimagery/win11-optimizer',
    download: 'https://github.com/Kensukeimagery/win11-optimizer/releases/latest/download/win11-optimizer.zip',
    docs: 'https://github.com/Kensukeimagery/win11-optimizer/tree/main/docs',
  },
];

// ---------- Japanese (strings in ja.js) ----------
import { deepAdd, projectsJa } from './ja.js';
projects.forEach((p, i) => deepAdd(p, projectsJa[i]));
