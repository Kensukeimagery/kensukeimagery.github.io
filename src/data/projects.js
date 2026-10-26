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
      th: 'แอป Windows และชุดสคริปต์ปรับแต่ง Windows 11 สำหรับเล่นเกม แบบโปร่งใส ทุกการแก้ไขอยู่ในไฟล์ .reg ที่อ่านได้ สำรองค่าเดิมก่อนแก้ ย้อนกลับได้ทีละรายการ มีเครื่องมือวัดผลก่อนและหลัง จัดการโปรแกรมที่เปิดพร้อมเครื่อง ล้างพื้นที่ ตรวจไดรเวอร์ คู่มือตั้งค่า NVIDIA ทีละขั้น และคู่มือภาษาไทยและอังกฤษ',
      en: 'A Windows app plus transparent gaming tweaks for Windows 11. Every change is a readable .reg file, backed up first and revertible one by one. It also measures before and after, manages startup programs, frees disk space, checks drivers, and comes with a step-by-step NVIDIA driver guide and Thai and English manuals.',
    },
    points: {
      th: [
        'แอปหน้าต่างเดียว (Win11 Optimizer.exe) ไม่ต้องติดตั้ง กด Easy Setup ให้ทำครบตามลำดับ หรือเปิด/ปิดทีละค่า',
        'สร้างจุดคืนค่าก่อนเสมอ และทุกการปรับมีไฟล์ย้อนกลับของตัวเอง',
        'วัดเครื่องก่อนและหลังปรับ ปิดโปรแกรมที่เปิดพร้อม Windows (ไม่ลบอะไร) ล้างไฟล์ชั่วคราวเมื่อคุณสั่งเท่านั้น',
        'อัปเดตตัวเองหลังคุณยืนยัน พร้อมตรวจ SHA-256 และมีชุดทดสอบอัตโนมัติรันทุกครั้งที่แก้โค้ด',
        'ซอร์สโค้ดของแอปเปิดให้ตรวจ (C# ประมาณ 1,800 บรรทัด) ไม่ลบไฟล์ ไม่แตะไฟล์เกม ไม่ส่งข้อมูลส่วนตัวออกไปไหน',
      ],
      en: [
        'A one-window app (Win11 Optimizer.exe), nothing to install: press Easy Setup to run everything in order, or switch tweaks one by one',
        'A restore point comes first, and every tweak has its own undo file',
        'Measures your PC before and after, switches off programs that start with Windows (nothing is deleted), and removes temporary files only when you say yes',
        'Updates itself after you confirm, with a SHA-256 check, and automated tests run on every change to the code',
        'Open-source app (about 1,800 lines of C#) you can inspect. Deletes nothing, leaves game files alone, sends none of your personal data anywhere',
      ],
    },
    facts: [
      { value: '26', label: { th: 'ค่าปรับแต่งที่มีไฟล์ย้อนกลับ', en: 'tweaks, each with an undo' } },
      { value: 'v4.33', label: { th: 'เวอร์ชันล่าสุด', en: 'latest version' } },
      { value: 'TH · EN', label: { th: 'แอปและคู่มือ 2 ภาษา', en: 'app and manuals' } },
    ],
    note: {
      th: 'ตรงไปตรงมา: ผลต่อ FPS ไม่มาก และขึ้นกับแต่ละเกม ไดรเวอร์การ์ดจอ การตั้งค่าในเกม และความเย็นสำคัญกว่า — จึงไม่สัญญาตัวเลข',
      en: 'The FPS gain is small and depends on the game. GPU drivers, in-game settings and cooling matter far more, so no numbers are promised.',
    },
    images: ['proj-win11-app-home', 'proj-win11-app-startup', 'proj-win11-app-tools'],
    imagesTh: ['proj-win11-app-home-th', 'proj-win11-app-startup-th', 'proj-win11-app-tools-th'],
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
  {
    title: 'Stream-safe Browser',
    year: '2026',
    tagline: {
      th: 'แชร์จอ Discord ตอนดู Netflix และ Disney+ โดยจอไม่ดำ',
      en: 'Share Netflix and Disney+ on Discord without the black screen.',
    },
    desc: {
      th: 'ตัวเปิด Microsoft Edge บน Windows ที่ปิดเฉพาะ PlayReady hardware DRM ซึ่งเป็นตัวที่ทำให้โปรแกรมจับภาพหน้าจออย่าง Discord เห็นจอดำ ส่วน GPU ยังทำงานเต็มที่ ไม่ต้องปิด Graphics acceleration ติดตั้งด้วยการดับเบิลคลิกครั้งเดียว',
      en: 'A launcher for Microsoft Edge on Windows that turns off only PlayReady hardware DRM, the part that makes screen-capture apps such as Discord see a black screen. The GPU keeps working at full speed, so there is no need to turn off graphics acceleration. One double-click installs it.',
    },
    points: {
      th: [
        'ปิดเฉพาะ hardware DRM ไม่ปิด GPU เว็บอื่นจึงไม่กระตุกเหมือนตอนปิด Graphics acceleration',
        'ติดตั้งใน 3 ขั้นตอน ได้ทางลัด Edge (Stream-safe) บน Desktop และลบออกได้ด้วย Uninstall.bat',
        'มี extension เล็กๆ บอกว่า hardware DRM ปิดอยู่หรือไม่ และเตือนบนเว็บสตรีมมิ่ง',
        'ทดสอบบน Edge 156 กับ Netflix จริง: โหมดปกติจับภาพได้จอดำ โหมด Stream-safe เห็นภาพ และยังเล่น 1080p ได้',
      ],
      en: [
        'Turns off hardware DRM only, not the GPU, so other sites do not stutter the way they do with graphics acceleration off',
        'Three-step install adds an Edge (Stream-safe) shortcut to your Desktop, and Uninstall.bat removes it',
        'A small extension shows whether hardware DRM is off and warns you on streaming sites',
        'Tested on Edge 156 with a real Netflix account: the capture is black in normal mode and visible in Stream-safe mode, still at 1080p',
      ],
    },
    facts: [
      { value: '3', label: { th: 'ขั้นตอนติดตั้ง', en: 'install steps' } },
      { value: '1080p', label: { th: 'Netflix ยังเล่นได้', en: 'Netflix still plays' } },
      { value: 'MIT', label: { th: 'โอเพนซอร์ส ใช้ฟรี', en: 'open source, free' } },
    ],
    note: {
      th: 'ตรงไปตรงมา: ใช้เพื่อแชร์จอของตัวเองให้เพื่อนดู ไม่ได้ช่วยเลี่ยง DRM เพื่อคัดลอกเนื้อหา Netflix 4K/HDR ดูไม่ได้ในโหมดนี้ และผลกับ Discord จริงยังรอรายงานจากผู้ใช้',
      en: 'For sharing your own screen with friends, not for copying content. Netflix 4K/HDR does not play in this mode, and results with Discord itself are still awaiting user reports.',
    },
    downloadLabel: { th: 'ดาวน์โหลดฟรี (Windows)', en: 'Download free (Windows)' },
    docsLabel: { th: 'อ่านวิธีใช้', en: 'Read the guide' },
    images: ['proj-ssb-banner'],
    tags: ['Windows', 'Microsoft Edge', 'PowerShell', 'Open source (MIT)'],
    url: 'https://github.com/Kensukeimagery/stream-safe-browser',
    download: 'https://github.com/Kensukeimagery/stream-safe-browser/releases/latest/download/stream-safe-browser-windows.zip',
    docs: 'https://github.com/Kensukeimagery/stream-safe-browser#readme',
  },
];

// ---------- Japanese (strings in ja.js) ----------
import { deepAdd, projectsJa } from './ja.js';
projects.forEach((p, i) => deepAdd(p, projectsJa[i]));
