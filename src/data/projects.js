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
      th: 'แอป Windows และชุดสคริปต์ปรับแต่ง Windows 11 สำหรับเล่นเกม แบบโปร่งใส ทุกการแก้ไขอยู่ในไฟล์ .reg ที่อ่านได้ สำรองค่าเดิมก่อนแก้ ย้อนกลับได้ทีละรายการ ตรวจสถานะได้ มีคู่มือตั้งค่า NVIDIA ทีละขั้น และคู่มือภาษาไทยและอังกฤษ',
      en: 'A Windows app plus transparent gaming tweaks for Windows 11. Every change is a readable .reg file, backed up first and revertible one by one, with a status check, a step-by-step NVIDIA driver guide and Thai and English manuals.',
    },
    points: {
      th: [
        'แอปหน้าต่างเดียว (Win11 Optimizer.exe) ไม่ต้องติดตั้ง กด Easy Setup ให้ทำครบตามลำดับ หรือเปิด/ปิดทีละค่า',
        'สร้างจุดคืนค่าก่อนเสมอ และทุกการปรับมีไฟล์ย้อนกลับของตัวเอง',
        'สคริปต์เป็นข้อความธรรมดา ซอร์สโค้ดของแอปเปิดให้ตรวจ (C# ประมาณ 1,500 บรรทัด)',
        'ไม่ลบไฟล์ ไม่แตะไฟล์เกม ไม่ส่งข้อมูลส่วนตัวออกไปไหน',
      ],
      en: [
        'A one-window app (Win11 Optimizer.exe), nothing to install: press Easy Setup to run everything in order, or switch tweaks one by one',
        'A restore point comes first, and every tweak has its own undo file',
        'Plain-text scripts and an open-source app (about 1,500 lines of C#) you can inspect',
        'Deletes nothing, leaves game files alone, sends none of your personal data anywhere',
      ],
    },
    facts: [
      { value: '16', label: { th: 'ค่าปรับแต่งที่มีเอกสารรองรับ', en: 'documented tweaks' } },
      { value: 'TH · EN', label: { th: 'แอปและคู่มือ 2 ภาษา', en: 'app and manuals' } },
      { value: 'MIT', label: { th: 'โอเพนซอร์ส ใช้ฟรี', en: 'open source, free' } },
    ],
    note: {
      th: 'ตรงไปตรงมา: ผลต่อ FPS ไม่มาก และขึ้นกับแต่ละเกม ไดรเวอร์การ์ดจอ การตั้งค่าในเกม และความเย็นสำคัญกว่า — จึงไม่สัญญาตัวเลข',
      en: 'The FPS gain is small and depends on the game. GPU drivers, in-game settings and cooling matter far more, so no numbers are promised.',
    },
    images: ['proj-win11-app-home', 'proj-win11-app-tweaks', 'proj-win11-menu'],
    imagesTh: ['proj-win11-app-home-th', 'proj-win11-app-tweaks-th', 'proj-win11-menu'],
    tags: ['Windows 11', 'C#', 'Batch', 'Registry', 'Open source (MIT)'],
    url: 'https://github.com/Kensukeimagery/win11-optimizer',
    download: 'https://github.com/Kensukeimagery/win11-optimizer/releases/latest/download/win11-optimizer.zip',
    docs: 'https://github.com/Kensukeimagery/win11-optimizer/tree/main/docs',
  },
  {
    title: 'Speaker Awake',
    year: '2026',
    tagline: {
      th: 'กันลำโพงไม่ให้หลับ จะได้ไม่พลาดเสียงเรียกแรกของสายโทรเข้า',
      en: 'Keep your speakers awake so you never miss the first ring of a call.',
    },
    desc: {
      th: 'โปรแกรมบนถาดระบบของ Windows ที่เล่นสัญญาณเบาๆ เป็นช่วงๆ ให้ลำโพงที่เข้าโหมดหลับเองเมื่อเงียบ (เช่น Microlab Solo 29) ตื่นอยู่เสมอ ค่าเริ่มต้นเป็นพัลส์อัลตราโซนิก 20 kHz ที่คนส่วนใหญ่ไม่ได้ยิน',
      en: 'A Windows tray app that plays a tiny signal at set intervals so auto-standby speakers (such as the Microlab Solo 29) never fall asleep. The default is a 20 kHz ultrasonic pulse most adults cannot hear.',
    },
    points: {
      th: [
        '7 โหมดสัญญาณ รวมโหมดสลับสุ่มสำหรับลำโพงที่ไม่ไว้ใจเสียงรูปแบบซ้ำๆ ปรับความถี่ ระดับเสียง ความยาวพัลส์ และรอบเวลาได้',
        'ตั้งช่วงเวลาทำงาน เลือกอุปกรณ์เสียงออก และหยุดเองเมื่อมีเพลงหรือสายคุย',
        'เริ่มพร้อม Windows ได้ มีหน้าจอภาษาไทยและอังกฤษ',
        'โอเพนซอร์ส ไม่ต้องสมัครบัญชี ไม่เชื่อมต่อเน็ต ไม่เก็บข้อมูล',
      ],
      en: [
        '7 signal modes, including Shuffle for speakers that stop trusting a fixed pattern, with adjustable frequency, level, pulse length and interval',
        'Schedule active hours, pick the output device, and pause automatically while music or a call is playing',
        'Starts with Windows; Thai and English interface',
        'Open source, no account, no network access, no telemetry',
      ],
    },
    facts: [
      { value: '7', label: { th: 'โหมดสัญญาณ', en: 'signal modes' } },
      { value: 'TH · EN', label: { th: 'ภาษาในโปรแกรม', en: 'app languages' } },
      { value: 'MIT', label: { th: 'โอเพนซอร์ส ใช้ฟรี', en: 'open source, free' } },
    ],
    note: {
      th: 'ผลต่างกันไปตามรุ่นลำโพง เมื่อปรับโหมดและค่าให้เหมาะกับลำโพงก็ใช้งานได้ผล (ผู้พัฒนาทดสอบแล้วกับ Microlab Solo 29) วิธีปรับค่าอธิบายไว้ในคู่มือ',
      en: 'Results vary by speaker model. Once the mode and settings are tuned to the speaker, it works (tested by the author on the Microlab Solo 29). The guide explains how to tune it.',
    },
    downloadLabel: { th: 'ดาวน์โหลดฟรี (Windows)', en: 'Download free (Windows)' },
    docsLabel: { th: 'อ่านวิธีใช้', en: 'Read the guide' },
    images: ['proj-speaker-banner', 'proj-speaker-main', 'proj-speaker-shuffle'],
    tags: ['Windows 10/11', 'Electron', 'Audio', 'Open source (MIT)'],
    url: 'https://github.com/Kensukeimagery/speaker-awake',
    download: 'https://github.com/Kensukeimagery/speaker-awake/releases/latest',
    docs: 'https://github.com/Kensukeimagery/speaker-awake#readme',
  },
];

// ---------- Japanese (strings in ja.js) ----------
import { deepAdd, projectsJa } from './ja.js';
projects.forEach((p, i) => deepAdd(p, projectsJa[i]));
