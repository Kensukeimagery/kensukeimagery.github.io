export const LANGS = ['th', 'en'];

/** pick the right language from a {th, en} object, or return a plain string */
export function t(v, lang) {
  if (v == null) return '';
  if (typeof v === 'string' || Array.isArray(v)) return v;
  return v[lang] ?? v.th ?? '';
}

/** build a path for a page in a language: path('/works/', 'en') -> '/en/works/' */
export function path(p, lang) {
  return lang === 'en' ? '/en' + (p === '/' ? '/' : p) : p;
}

const thMonths = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
const enMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** '2024-02-15' -> 'ก.พ. 2567' / 'Feb 2024' ; '2017' -> '2560' / '2017' */
export function fmtDate(d, lang) {
  if (!d) return '';
  const [y, m] = d.split('-').map(Number);
  const year = lang === 'th' ? y + 543 : y;
  if (!m) return String(year);
  return `${(lang === 'th' ? thMonths : enMonths)[m - 1]} ${year}`;
}

export function fmtRange(start, end, lang) {
  if (!start) return '';
  const s = fmtDate(start, lang);
  if (end === null) return `${s} – ${lang === 'th' ? 'ปัจจุบัน' : 'Present'}`;
  if (!end) return s;
  return `${s} – ${fmtDate(end, lang)}`;
}

/** convert a CE year string like '2025 – 2026' to BE for Thai */
export function fmtYear(y, lang) {
  if (!y) return '';
  const s = t(y, lang);
  return lang === 'th' ? s.replace(/\b(19|20)\d{2}\b/g, (m) => String(Number(m) + 543)) : s;
}

export function ageOn(birth, now = new Date()) {
  const b = new Date(birth);
  let a = now.getFullYear() - b.getFullYear();
  const mm = now.getMonth() - b.getMonth();
  if (mm < 0 || (mm === 0 && now.getDate() < b.getDate())) a--;
  return a;
}

export const ui = {
  nav: {
    home: { th: 'หน้าแรก', en: 'Home' },
    works: { th: 'ผลงาน', en: 'Works' },
    profile: { th: 'โปรไฟล์ & เรซูเม่', en: 'Profile & Résumé' },
    gallery: { th: 'อัลบั้ม', en: 'Gallery' },
    contact: { th: 'ติดต่อ', en: 'Contact' },
  },
  viewWorks: { th: 'ดูผลงาน', en: 'View works' },
  contactMe: { th: 'ติดต่องาน', en: 'Book Ken' },
  selected: { th: 'ผลงานเด่น', en: 'Selected Work' },
  allWorks: { th: 'ดูผลงานทั้งหมด', en: 'See all works' },
  brandsTitle: { th: 'แบรนด์ที่เคยร่วมงาน', en: 'Brands I’ve worked with' },
  about: { th: 'เกี่ยวกับเคน', en: 'About Ken' },
  readProfile: { th: 'ดูโปรไฟล์และเรซูเม่', en: 'Profile & résumé' },
  galleryTeaser: { th: 'มุมมองผ่านเลนส์ฟิล์ม', en: 'Through a film lens' },
  galleryTeaserText: {
    th: 'งานอดิเรกที่รัก — ภาพถ่ายจากกล้องฟิล์ม Olympus OM-1 และ XA2 ทั้งในกรุงเทพฯ และญี่ปุ่น',
    en: 'A hobby I love — frames shot on an Olympus OM-1 and XA2, from Bangkok to Japan.',
  },
  openGallery: { th: 'เปิดอัลบั้ม', en: 'Open gallery' },
  comingSoon: { th: 'รอออนแอร์', en: 'Coming soon' },
  play: { th: 'เล่นวิดีโอ', en: 'Play video' },
  watchOn: { th: 'ดูบน', en: 'Watch on' },
  references: { th: 'ลิงก์อ้างอิง', en: 'References' },
  worksTitle: { th: 'ผลงาน', en: 'Works' },
  worksLead: {
    th: 'รวมผลงานโฆษณา ไลฟ์สด พิธีกร และงานแสดง — แตะที่วิดีโอเพื่อเล่นได้ทันที',
    en: 'Commercials, live commerce, hosting and acting — tap any video to play it here.',
  },
  profileTitle: { th: 'โปรไฟล์ & เรซูเม่', en: 'Profile & Résumé' },
  compCard: { th: 'ข้อมูลนักแสดง', en: 'Comp Card' },
  age: { th: 'อายุ', en: 'Age' },
  years: { th: 'ปี', en: 'yrs' },
  height: { th: 'ส่วนสูง', en: 'Height' },
  weight: { th: 'น้ำหนัก', en: 'Weight' },
  measurements: { th: 'สัดส่วน', en: 'Measurements' },
  shoe: { th: 'ไซซ์รองเท้า', en: 'Shoe size' },
  experience: { th: 'ประสบการณ์ทำงาน', en: 'Experience' },
  groups: {
    full: { th: 'งานประจำ', en: 'Full-time' },
    freelance: { th: 'ฟรีแลนซ์ & สัญญาจ้าง', en: 'Freelance & Contract' },
    other: { th: 'ประสบการณ์อื่น', en: 'Other Experience' },
    intern: { th: 'ฝึกงาน', en: 'Internships' },
  },
  education: { th: 'การศึกษา', en: 'Education' },
  awards: { th: 'รางวัล', en: 'Awards' },
  skills: { th: 'ทักษะ', en: 'Skills' },
  hobbies: { th: 'งานอดิเรก', en: 'Hobbies' },
  print: { th: 'ดาวน์โหลดเรซูเม่ (PDF)', en: 'Download résumé (PDF)' },
  galleryTitle: { th: 'อัลบั้ม', en: 'Gallery' },
  portraits: { th: 'Portraits', en: 'Portraits' },
  film: { th: 'Film Photography', en: 'Film Photography' },
  portraitsLead: { th: 'ภาพโปรไฟล์และภาพถ่ายแฟชั่น', en: 'Profile and fashion portraits' },
  filmLead: { th: 'งานอดิเรก — ถ่ายด้วยกล้องฟิล์ม', en: 'A hobby — shot on film' },
  contactTitle: { th: 'ร่วมงานกับเคน', en: 'Work with Ken' },
  contactLead: {
    th: 'รับงานพิธีกรไลฟ์สด โฆษณา อีเวนต์ และงานถ่ายแบบ — ทักมาคุยรายละเอียดได้เลย',
    en: 'Available for live commerce, commercials, events and modelling — get in touch.',
  },
  dm: { th: 'ส่งข้อความทาง Instagram', en: 'Message on Instagram' },
  email: { th: 'ส่งอีเมล', en: 'Send an email' },
  rights: { th: 'สงวนลิขสิทธิ์', en: 'All rights reserved' },
  menu: { th: 'เมนู', en: 'Menu' },
  close: { th: 'ปิด', en: 'Close' },
  prev: { th: 'ก่อนหน้า', en: 'Previous' },
  next: { th: 'ถัดไป', en: 'Next' },
  scroll: { th: 'เลื่อนลง', en: 'Scroll' },
  carouselHint: { th: 'ปัดเพื่อดูผลงาน แตะที่คลิปเพื่อเล่นได้ทันที', en: 'Swipe through — tap any clip to play it right here.' },
  details: { th: 'ดูรายละเอียด', en: 'Details' },
  languages: { th: 'ภาษา', en: 'Languages' },
  skillsLead: { th: 'ความสามารถหลัก', en: 'What I bring' },
  resumeOnline: { th: 'ดูเรซูเม่ออนไลน์', en: 'View résumé online' },
  openTiktok: { th: 'บนคอมจะเปิดดูใน TikTok', en: 'Opens in TikTok on desktop' },
};
