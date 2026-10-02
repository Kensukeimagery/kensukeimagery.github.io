// =============================================================
//  ข้อมูลหลักของเว็บ — แก้ไขข้อมูลส่วนตัว/ประวัติที่ไฟล์นี้ที่เดียว
//  ทุกข้อความมี 2 ภาษา: { th: '...', en: '...' }
//  วันที่ใช้รูปแบบ ค.ศ. 'YYYY-MM' หรือ 'YYYY-MM-DD' (เว็บแปลงเป็น พ.ศ. ให้เอง)
// =============================================================

export const person = {
  nameTh: 'สุทัศน์ ทองแกมแก้ว',
  nameEn: 'Suthat Thongkaemkaew',
  nick: { th: 'เคน', en: 'Ken' },
  birthDate: '2002-02-01', // ใช้คำนวณอายุอัตโนมัติ (ไม่แสดงวันเกิดเต็มบนเว็บ)
  roles: {
    th: ['พิธีกรไลฟ์สด', 'นักแสดงโฆษณา', 'พิธีกรอีเวนต์'],
    en: ['Live Commerce MC', 'Commercial Talent', 'Event Host'],
  },
  intro: {
    th: 'พิธีกรไลฟ์สดและนักแสดงโฆษณา ผู้มีพื้นฐานด้านไอทีและงานขาย ถ่ายทอดจุดเด่นของสินค้าได้อย่างเข้าใจของจริง ผ่านงานกับแบรนด์ชั้นนำทั้งสินค้าไลฟ์สไตล์ แฟชั่น และแกดเจ็ต',
    en: 'A live commerce MC and commercial talent with a background in IT and sales — presenting products with real understanding, across lifestyle, fashion and gadget brands.',
  },
  about: {
    th: [
      'ปัจจุบันเป็นพิธีกรไลฟ์สดประจำบริษัท เทคแลนด์ เทคโนโลยี (ประเทศไทย) ดูแลการไลฟ์ขายสินค้าให้แบรนด์อย่าง Joyroom, Samsonite, UGREEN และ Skechers รวมถึงร่วมงานในฐานะนักแสดงโฆษณา',
      'ด้วยพื้นฐานสายเทคโนโลยีสารสนเทศและประสบการณ์งานขายทั้งหน้าร้านและโครงการ B2B ทำให้อธิบายสินค้าเชิงเทคนิคได้ชัดเจน เข้าใจลูกค้า และปิดการขายได้จริง',
      'นอกเวลางาน ชอบถ่ายภาพด้วยกล้องฟิล์ม ฟังเพลง และอ่านหนังสือ',
    ],
    en: [
      'Currently a full-time live commerce MC at Techland Technology (Thailand), hosting live sales for brands such as Joyroom, Samsonite, UGREEN and Skechers, and appearing in brand commercials.',
      'A background in information technology and hands-on sales — from retail floors to B2B project bidding — lets him explain technical products clearly, read the audience and close the sale.',
      'Off camera, he shoots film photography, listens to music and reads.',
    ],
  },
  stats: {
    heightCm: 185,
    weightKg: 75,
    measurementsIn: '34 – 30 – 39',
    measurementsCm: '86 – 77 – 100',
    shoe: 'US 10.5 · EU 44.5 · 27 cm',
  },
  hobbies: {
    th: ['ถ่ายภาพฟิล์ม', 'ฟังเพลง', 'อ่านหนังสือ'],
    en: ['Film photography', 'Music', 'Reading'],
  },
  skills: {
    th: ['พิธีกรไลฟ์สดขายสินค้า', 'นำเสนอสินค้าหน้ากล้อง', 'นักแสดงโฆษณา / นายแบบ', 'พิธีกรอีเวนต์และอีสปอร์ต', 'งานขายและประมูลโครงการ', 'IT Support / ฮาร์ดแวร์'],
    en: ['Live commerce hosting', 'On-camera product presentation', 'Commercial acting & modelling', 'Event & esports hosting', 'Sales & project bidding', 'IT support & hardware'],
  },
  // ภาษาที่สื่อสารได้ เช่น [{ th: 'ไทย (ภาษาแม่)', en: 'Thai (native)' }] — เว้นว่างไว้จะไม่แสดง
  languages: [],
  // คลิปรวมผลงาน (showreel) เช่น { type: 'youtube', id: 'xxxx' } — null = ไม่แสดง
  showreel: null,
  contact: {
    instagram: 'kensukefps',
    email: '', // ใส่อีเมลงานภายหลัง เช่น 'ken@example.com' แล้วปุ่มอีเมลจะขึ้นเอง
  },
};

// ตัวเลขเด่นหน้าแรก
export const highlights = [
  { value: '10+', label: { th: 'แบรนด์ที่ร่วมงาน', en: 'Brands worked with' } },
  { value: '3+', label: { th: 'ปีประสบการณ์ไลฟ์สด', en: 'Years hosting live' } },
  { value: '1.5M', prefix: '฿', label: { th: 'มูลค่าโครงการที่ชนะประมูล', en: 'Project bid won' } },
  { value: '185', suffix: 'cm', label: { th: 'ส่วนสูง', en: 'Height' } },
];

// แบรนด์ที่เคยร่วมงาน (แสดงเป็นตัวอักษร)
export const brands = [
  'SAMSONITE', 'TECNO', 'JOYROOM', 'UGREEN', 'SKECHERS', 'POSEE', 'QIAODAN', 'AKASO',
  'SOLOEVER', 'BOUSVCLIGHT', 'CIMB THAI', 'DEVAS IPASON', 'RAZER', 'THERMALTAKE', 'EPOS', 'PERSOL',
];

// ---------------- ประวัติการทำงาน ----------------
// group: 'full' = งานประจำ, 'freelance' = ฟรีแลนซ์/สัญญาจ้าง, 'other' = ประสบการณ์อื่น, 'intern' = ฝึกงาน
export const experience = [
  {
    group: 'freelance',
    org: 'Giga Live',
    role: { th: 'พิธีกรไลฟ์ขายสินค้า (สัญญาจ้าง)', en: 'Live Commerce MC (contract)' },
    start: '2026-08-01', end: '2026-12-31',
  },
  {
    group: 'full',
    org: { th: 'บริษัท เทคแลนด์ เทคโนโลยี (ประเทศไทย) จำกัด', en: 'Techland Technology (Thailand) Co., Ltd.' },
    role: { th: 'พิธีกรไลฟ์สด (MC Live)', en: 'Live Stream MC' },
    start: '2024-02-15', end: null,
    points: {
      th: ['พิธีกรไลฟ์ประจำแบรนด์ Joyroom (สินค้าแกดเจ็ต)', 'ไลฟ์ให้ SAMSONITE, UGREEN, Skechers, POSEE, Qiaodan, AKASO, SOLOEVER, Bousvclight', 'นักแสดงโฆษณา SAMSONITE, TECNO Mobile และ POSEE'],
      en: ['Resident live host for Joyroom (gadgets)', 'Live sales for SAMSONITE, UGREEN, Skechers, POSEE, Qiaodan, AKASO, SOLOEVER, Bousvclight', 'Commercial talent for SAMSONITE, TECNO Mobile and POSEE'],
    },
  },
  {
    group: 'full',
    org: { th: 'บริษัท เดวาส์ ไอพาสัน จำกัด', en: 'Devas IPASON Co., Ltd.' },
    role: { th: 'Sales Executive', en: 'Sales Executive' },
    // ลำดับตำแหน่งตั้งแต่เข้างานจนถึงตำแหน่งสุดท้าย
    path: ['Senior Admin and Sales Staff', 'Senior Sales Staff', 'Products and Sales Staff', 'Product Manager', 'Sales Executive'],
    start: '2023-02-05', end: '2023-10-05',
    points: {
      th: ['ชนะการประมูลโครงการ IT โรงเรียนเซนต์หลุยส์ ฉะเชิงเทรา มูลค่า 1,500,000 บาท', 'พิธีกรไลฟ์ขายสินค้า แนะนำโปรโมชั่นและกิจกรรม', 'พิธีกรการแข่งขัน Valorant ณ มหาวิทยาลัยศรีปทุม'],
      en: ['Won a ฿1.5M IT project bid for St. Louis School, Chachoengsao', 'Hosted live sales, promotions and campaigns', 'Esports MC for a Valorant tournament at Sripatum University'],
    },
  },
  {
    group: 'full',
    org: { th: 'บริษัท ไอที ซิตี้ จำกัด (มหาชน)', en: 'IT City Public Co., Ltd.' },
    role: { th: 'พนักงานขายหน้าร้าน', en: 'Retail Sales Staff' },
    start: '2022-07-24', end: '2023-01-30',
  },
  {
    group: 'freelance',
    org: 'CIMB Thai',
    role: { th: 'นักแสดงเดินทรูป รับบทมาสคอต "Reminder Man"', en: 'Troupe performer as mascot "Reminder Man"' },
  },
  {
    group: 'freelance',
    org: 'Exhibition ENTAKU (Japan)',
    role: { th: 'นักแสดงถ่ายแบบคอนเทนต์นิทรรศการ ประเทศญี่ปุ่น', en: 'Featured model for an exhibition in Japan' },
  },
  {
    group: 'freelance',
    org: 'PERSOL Thailand',
    role: { th: 'นักแสดงคอนเทนต์สัมภาษณ์ (บท Graphic Designer)', en: 'Interview content actor (as a Graphic Designer)' },
  },
  {
    group: 'freelance',
    org: 'Spica Hair Design',
    role: { th: 'นายแบบทรงผม', en: 'Hair model' },
  },
  {
    group: 'freelance',
    org: 'Commart',
    role: { th: 'เดินบิล พนักงานขาย และตัวแทนแนะนำสินค้าประจำบูธ (Razer, EPOS, Thermaltake, IPASON)', en: 'Booth sales & product presenter (Razer, EPOS, Thermaltake, IPASON)' },
  },
  {
    group: 'other',
    org: 'The City Wave · JAS Urban Srinakarin',
    role: { th: 'Assistant Bartender (บาร์ดาดฟ้า)', en: 'Assistant Bartender (rooftop bar)' },
    photos: ['work-citywave-1', 'work-citywave-2', 'work-citywave-4'],
  },
  {
    group: 'other',
    org: { th: 'ARA COFFEE (ลาซาล 52) · โภควดี Coffee and Bar (เดอโบตั๋น บางนา)', en: 'ARA COFFEE (Lasalle 52) · Phokhawadee Coffee and Bar (De Bottan Bangna)' },
    role: { th: 'บาริสต้า', en: 'Barista' },
  },
  {
    group: 'other',
    org: 'BIG Motor Sale 2017',
    role: { th: 'ดูแลลูกค้าและรถยนต์ บูธ Hyundai', en: 'Customer & vehicle care, Hyundai booth' },
    start: '2017',
  },
  {
    group: 'intern',
    org: { th: 'บมจ. สยามแก๊ส แอนด์ ปิโตรเคมิคัลส์', en: 'Siam Gas and Petrochemicals PCL' },
    role: { th: 'IT Support (ฝึกงาน)', en: 'IT Support Intern' },
    start: '2021-06', end: '2021-09',
  },
  {
    group: 'intern',
    org: { th: 'บมจ. มิตรสิบ ลิสซิ่ง (สำนักงานใหญ่)', en: 'Mitsib Leasing PCL (Head Office)' },
    role: { th: 'IT Support (ฝึกงาน)', en: 'IT Support Intern' },
    start: '2019-07', end: '2019-09',
  },
];

export const education = [
  {
    level: { th: 'ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)', en: 'Higher Vocational Diploma' },
    major: { th: 'สาขาวิชาเทคโนโลยีสารสนเทศ', en: 'Information Technology' },
    school: { th: 'วิทยาลัยพณิชยการบางนา', en: 'Bangna Commercial College' },
  },
  {
    level: { th: 'ประกาศนียบัตรวิชาชีพ (ปวช.)', en: 'Vocational Certificate' },
    major: { th: 'สาขาวิชาคอมพิวเตอร์ธุรกิจ', en: 'Business Computer' },
    school: { th: 'วิทยาลัยพณิชยการบางนา', en: 'Bangna Commercial College' },
  },
];

export const awards = [
  {
    year: '2019',
    title: { th: 'Bangna Print Service — ระบบพิมพ์เอกสารบริการตนเอง', en: 'Bangna Print Service — self-service document printing system' },
    event: { th: 'Thailand Innovation · ประเภทสิ่งประดิษฐ์ด้านพัฒนาคุณภาพชีวิต', en: 'Thailand Innovation · Quality-of-life inventions' },
    results: { th: ['รางวัลชนะเลิศ ระดับจังหวัด', 'รางวัลชมเชย เหรียญเงิน ระดับภูมิภาค (ภาคกลาง)'], en: ['Winner, provincial level', 'Honourable mention (silver), Central region'] },
    url: 'https://thaiinvention.net/detail.php?p=cHJvamVjdF9pZD01Njc3MSZjZmdfaWQ9MzUmY29tcGV0X2lkPTE=&cond=JnNfY29tcGV0PTE=',
  },
  {
    year: '2018',
    title: { th: 'ราวตากผ้าอัตโนมัติ', en: 'Automatic clothesline' },
    event: { th: 'Thailand Innovation · ประเภทสิ่งประดิษฐ์ด้านพัฒนาคุณภาพชีวิต', en: 'Thailand Innovation · Quality-of-life inventions' },
    results: { th: ['รางวัลชมเชย'], en: ['Honourable mention'] },
    url: 'https://thaiinvention.net/bb_projectdetail.php?p=cHJvamVjdF9pZD00MDAwMCZjZmdfaWQ9MjkmY29tcGV0X2lkPTE=',
  },
];
