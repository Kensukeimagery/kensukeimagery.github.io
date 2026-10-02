// =============================================================
//  บริการที่รับงาน — แก้รายการ/คำอธิบายได้ที่ไฟล์นี้
//  filter = หมวดผลงานที่ลิงก์ไป (ดู categories ใน works.js)
// =============================================================

// ไอคอนเส้น (SVG path) ใช้ร่วมกันทั้งเว็บ
export const icons = {
  acting: 'M4 7h12v10H4zM16 10l4-2v8l-4-2',
  event: 'M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.4 6.8 19.1l1-5.8L3.5 9.2l5.9-.9z',
  mc: 'M12 3a3 3 0 0 1 3 3v5a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3zM6 11a6 6 0 0 0 12 0M12 17v4M8 21h8',
  live: 'M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M7.8 7.8a6 6 0 0 0 0 8.4M16.2 7.8a6 6 0 0 1 0 8.4M5 5a10 10 0 0 0 0 14M19 5a10 10 0 0 1 0 14',
  model: 'M12 4a3 3 0 1 1 0 6a3 3 0 0 1 0-6zM5 21v-2a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v2',
  repair: 'M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z',
  care: 'M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6zM9 12l2 2 4-4',
  upgrade: 'M7 3h10v18H7zM10 7h4M12 17v-6M9.5 13.5 12 11l2.5 2.5',
  build: 'M4 4h16v12H4zM8 20h8M12 16v4M8 8h3v4H8zM13 8h3',
};

export const talentServices = [
  {
    id: 'acting', filter: 'commercial',
    title: { th: 'งานแสดง / โฆษณา', en: 'Acting & Commercials' },
    desc: { th: 'นักแสดงโฆษณา คอนเทนต์แบรนด์ และวิดีโอออนไลน์', en: 'Commercials, brand content and online video' },
  },
  {
    id: 'event', filter: 'event',
    title: { th: 'งานอีเวนต์', en: 'Events' },
    desc: { th: 'ประจำบูธ แนะนำสินค้า ทรูปแสดง และงานเปิดตัว', en: 'Booths, product demos, troupes and launches' },
  },
  {
    id: 'mc', filter: 'event',
    title: { th: 'พิธีกร / MC', en: 'MC & Host' },
    desc: { th: 'พิธีกรงานอีเวนต์ งานแข่งขัน และอีสปอร์ต', en: 'Event, competition and esports hosting' },
  },
  {
    id: 'live', filter: 'live',
    title: { th: 'รับไลฟ์ขายของ', en: 'Live Commerce' },
    desc: { th: 'พิธีกรไลฟ์ TikTok / Shopee / Lazada ปิดการขายเป็น', en: 'TikTok, Shopee & Lazada live selling' },
  },
  {
    id: 'model', filter: 'model',
    title: { th: 'นายแบบ', en: 'Modelling' },
    desc: { th: 'ถ่ายแบบสินค้า แฟชั่น และทรงผม · สูง 185 ซม.', en: 'Product, fashion and hair modelling · 185 cm' },
  },
];

export const itServices = [
  {
    id: 'repair',
    title: { th: 'ซ่อมคอมพิวเตอร์', en: 'Computer Repair' },
    desc: { th: 'ตรวจเช็กอาการ เปิดไม่ติด เครื่องช้า จอฟ้า แก้ปัญหาฮาร์ดแวร์และซอฟต์แวร์', en: 'Diagnosis and fixes for boot issues, slowdowns, crashes, hardware and software' },
  },
  {
    id: 'care',
    title: { th: 'ดูแลคอมพิวเตอร์', en: 'Maintenance & Care' },
    desc: { th: 'ทำความสะอาด เปลี่ยนซิลิโคน ลงโปรแกรม ดูแลเครื่องในบ้านหรือออฟฟิศเล็ก', en: 'Cleaning, thermal paste, software setup, home & small-office care' },
  },
  {
    id: 'upgrade',
    title: { th: 'อัปเกรดเครื่อง', en: 'Upgrades' },
    desc: { th: 'เพิ่มแรม เปลี่ยน SSD การ์ดจอ แนะนำสเปกให้คุ้มงบ', en: 'RAM, SSD and GPU upgrades with budget-friendly advice' },
  },
  {
    id: 'build',
    title: { th: 'ประกอบคอม', en: 'Custom PC Builds' },
    desc: { th: 'จัดสเปกและประกอบคอมใหม่ สำหรับเล่นเกม ทำงาน หรือสตรีม', en: 'Spec and build new PCs for gaming, work or streaming' },
  },
];

export const serviceArea = {
  th: 'กรุงเทพฯ สมุทรปราการ และปริมณฑล — สะดวกโซน MRT ศรีแบริ่ง (สายสีเหลือง) และพื้นที่ติดรถไฟฟ้าไปได้ทุกสาย พื้นที่อื่นคุยค่าเดินทางกันก่อน',
  en: 'Bangkok, Samut Prakan and nearby provinces — easiest around MRT Si Bearing (Yellow Line), and anywhere along the BTS/MRT lines; other areas by arrangement (travel fee agreed in advance)',
};

export const itSteps = [
  { th: 'ทักมาทาง Instagram แจ้งอาการ รุ่นเครื่อง หรือสเปกที่อยากได้', en: 'Message on Instagram with the symptoms, model or the spec you want' },
  { th: 'ประเมินงานและราคาเบื้องต้น รวมค่าเดินทาง (ถ้ามี)', en: 'Get an estimate, including any travel fee' },
  { th: 'นัดวันเวลาที่สะดวก ไปดูหน้างานหรือรับเครื่อง', en: 'Book a time — on-site visit or device pick-up' },
  { th: 'ซ่อม/อัปเกรด/ประกอบ แล้วทดสอบเครื่องก่อนส่งมอบ', en: 'Repair, upgrade or build — tested before hand-over' },
];
