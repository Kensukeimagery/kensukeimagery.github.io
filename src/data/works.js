// =============================================================
//  ผลงาน — เพิ่มผลงานใหม่ได้โดยคัดลอก 1 ก้อน { ... } แล้วแก้ข้อมูล
//  category: 'commercial' | 'live' | 'event' | 'short' | 'model' | 'bts' | 'business'
//  media:
//    { type: 'tiktok', user: '<ชื่อบัญชี>', id: '<เลขวิดีโอ>' }
//    { type: 'youtube', id: '<รหัสวิดีโอ>' }
//    { type: 'instagram', id: '<รหัส reel>' }
//    { type: 'image', src: '<ชื่อรูปใน images.json>' }
//    เพิ่ม shop: true ให้คลิป TikTok ที่ปักตะกร้า (บนคอมจะเปิดในแท็บ TikTok แทน เพราะ TikTok ไม่ให้เล่นในเว็บอื่น)
//  links: ลิงก์อ้างอิงที่ฝังไม่ได้ (เช่น Facebook)
//  status: 'soon' = รอออนแอร์ (ยังไม่แสดงสื่อ)
//  featured: ตัวเลข = แสดงในสไลด์ผลงานหน้าแรก (เรียงตามเลข)
// =============================================================

export const categories = [
  { id: 'all', th: 'ทั้งหมด', en: 'All' },
  { id: 'commercial', th: 'โฆษณา', en: 'Commercial' },
  { id: 'live', th: 'MC ไลฟ์สด', en: 'Live MC' },
  { id: 'event', th: 'พิธีกรอีเวนต์', en: 'Event Host' },
  { id: 'short', th: 'คลิปสั้น', en: 'Short Video' },
  { id: 'model', th: 'นายแบบ / นักแสดง', en: 'Model / Acting' },
  { id: 'bts', th: 'เบื้องหลัง', en: 'Behind the Scenes' },
  { id: 'business', th: 'งานขาย & โครงการ', en: 'Sales & Projects' },
];

export const works = [
  {
    slug: 'samsonite',
    category: 'commercial',
    featured: 1,
    brand: 'SAMSONITE',
    title: { th: 'นักแสดงโฆษณากระเป๋า', en: 'Bag commercial — on-screen talent' },
    company: 'Techland Technology',
    year: '2025 – 2026',
    desc: {
      th: 'นำเสนอคอลเลกชัน JERALD และ UNDERSCORE ในลุคนักธุรกิจมินิมอล สำหรับช่องทาง TikTok ของแบรนด์',
      en: 'Presenting the JERALD and UNDERSCORE collections in a minimal business look for the brand’s TikTok channel.',
    },
    media: [
      { type: 'tiktok', user: 'samsonitethbackpack', id: '7485214483044896008', shop: true, label: { th: 'JERALD กระเป๋าเป้', en: 'JERALD backpack' } },
      { type: 'tiktok', user: 'samsonitethbackpack', id: '7520163410294918418', shop: true, label: { th: 'JERALD กระเป๋าถือ', en: 'JERALD briefcase' } },
      { type: 'tiktok', user: 'samsonitethbackpack', id: '7680149614472744213', shop: true, label: { th: 'UNDERSCORE', en: 'UNDERSCORE' } },
    ],
  },
  {
    slug: 'samsonite-bts',
    category: 'bts',
    featured: 6,
    brand: 'SAMSONITE × LIVELAB',
    title: { th: 'เบื้องหลังกองถ่ายโฆษณา', en: 'Commercial shoot — behind the scenes' },
    company: 'Techland Technology',
    year: '2025',
    desc: { th: 'วิดีโอเบื้องหลังการถ่ายทำโฆษณา SAMSONITE', en: 'Behind-the-scenes vlog from the SAMSONITE shoot.' },
    media: [{ type: 'tiktok', user: 'livelab_th', id: '7509803399693470984' }],
  },
  {
    slug: 'tecno',
    category: 'commercial',
    status: 'soon',
    brand: 'TECNO Mobile',
    title: { th: 'โฆษณาโทรศัพท์มือถือ Pova 8 Pro และ Pova 8', en: 'Pova 8 Pro & Pova 8 smartphone commercial' },
    company: 'Techland Technology',
    year: '2026',
  },
  {
    slug: 'posee',
    category: 'commercial',
    status: 'soon',
    brand: 'POSEE',
    title: { th: 'โฆษณารองเท้า', en: 'Footwear commercial' },
    company: 'Techland Technology',
    year: '2026',
  },
  {
    slug: 'live-mc-techland',
    category: 'live',
    featured: 2,
    brand: 'JOYROOM & MORE',
    title: { th: 'พิธีกรไลฟ์สดประจำแบรนด์', en: 'Resident live commerce host' },
    company: 'Techland Technology',
    year: { th: '2024 – ปัจจุบัน', en: '2024 – Present' },
    desc: {
      th: 'ปัจจุบันเป็น MC ไลฟ์ประจำแบรนด์ Joyroom (สินค้าแกดเจ็ต) และเคยไลฟ์ให้ SAMSONITE, UGREEN, Skechers, POSEE, Qiaodan, AKASO, SOLOEVER และ Bousvclight',
      en: 'Currently the resident host for Joyroom (gadgets); previously hosted live sales for SAMSONITE, UGREEN, Skechers, POSEE, Qiaodan, AKASO, SOLOEVER and Bousvclight.',
    },
    media: [
      { type: 'tiktok', user: 'bousvclight', id: '7365507705513069842', shop: true, label: { th: 'ตัวอย่างไลฟ์ 1', en: 'Live sample 1' } },
      { type: 'tiktok', user: 'bousvclight', id: '7394667143058492688', shop: true, label: { th: 'ตัวอย่างไลฟ์ 2', en: 'Live sample 2' } },
    ],
  },
  {
    slug: 'giga-live',
    category: 'live',
    brand: 'Giga Live',
    title: { th: 'MC ไลฟ์ขายสินค้า (สัญญาจ้าง)', en: 'Live commerce MC (contract)' },
    year: '2026',
    desc: { th: 'สัญญาจ้าง 1 ส.ค. – 31 ธ.ค. 2569', en: 'Contract, Aug 1 – Dec 31, 2026' },
  },
  {
    slug: 'livelab',
    category: 'short',
    featured: 3,
    brand: 'LIVELAB TH',
    title: { th: 'คลิปสั้นแนะนำบริษัท', en: 'Company promo short videos' },
    company: 'Techland Technology',
    year: '2025',
    media: [
      { type: 'tiktok', user: 'livelab_th', id: '7519125336869604615' },
      { type: 'tiktok', user: 'livelab_th', id: '7565817221197384981' },
    ],
  },
  {
    slug: 'valorant',
    category: 'event',
    featured: 4,
    brand: 'Esports · VALORANT',
    title: { th: 'พิธีกรการแข่งขัน Valorant ณ มหาวิทยาลัยศรีปทุม', en: 'Valorant tournament MC at Sripatum University' },
    company: 'Devas IPASON',
    year: '2023',
    media: [{ type: 'youtube', id: 'UJg8T2KXO7g' }],
  },
  {
    slug: 'ipason-live',
    category: 'live',
    brand: 'DEVAS IPASON',
    title: { th: 'พิธีกรไลฟ์ขายสินค้า แนะนำโปรโมชั่นและกิจกรรม', en: 'Live sales host — promotions & campaigns' },
    company: 'Devas IPASON',
    year: '2023',
    media: [{ type: 'image', src: 'work-ipason-live', label: { th: 'ก่อนขึ้นไลฟ์', en: 'Before going live' } }],
  },
  {
    slug: 'ipason-short',
    category: 'short',
    brand: 'IPASON',
    title: { th: 'คลิปสั้นโปรโมตสินค้า IT', en: 'IT product promo short' },
    company: 'Devas IPASON',
    year: '2023',
    media: [{ type: 'tiktok', user: 'ipason_thailand', id: '7283820993099894021', shop: true }],
  },
  {
    slug: 'standin',
    category: 'bts',
    brand: 'DEVAS IPASON × BANANA',
    title: { th: 'Stand-in ทดสอบแสงและกล้อง งานไลฟ์สด', en: 'Stand-in for lighting & camera tests — live show' },
    company: 'Devas IPASON',
    year: '2023',
    media: [{ type: 'youtube', id: 'KRH-qPeMI4s' }],
  },
  {
    slug: 'st-louis',
    category: 'business',
    brand: { th: 'โรงเรียนเซนต์หลุยส์ ฉะเชิงเทรา', en: 'St. Louis School Chachoengsao' },
    title: { th: 'ชนะการประมูลโครงการ IT มูลค่า 1,500,000 บาท', en: 'Won a ฿1,500,000 IT project bid' },
    company: 'Devas IPASON',
    year: '2023',
    desc: { th: 'ดูแลการประมูลและส่งมอบห้องปฏิบัติการคอมพิวเตอร์ให้โรงเรียน', en: 'Bid for and delivered a full computer lab for the school.' },
    media: [{ type: 'image', src: 'work-stlouis-lab', label: { th: 'ห้องคอมพิวเตอร์ที่ชนะประมูล', en: 'The computer lab delivered' } }],
  },
  {
    slug: 'cimb',
    category: 'model',
    brand: 'CIMB THAI',
    title: { th: 'นักแสดงเดินทรูป รับบทมาสคอต "Reminder Man"', en: 'Troupe performer as mascot "Reminder Man"' },
    links: [
      { label: 'Facebook 1', url: 'https://www.facebook.com/share/p/1cv5f6Grdu/' },
      { label: 'Facebook 2', url: 'https://www.facebook.com/share/p/18CaiC4bgh/' },
      { label: 'Facebook 3', url: 'https://www.facebook.com/share/p/19XFGskRUQ/' },
    ],
  },
  {
    slug: 'spica',
    category: 'model',
    featured: 5,
    brand: 'SPICA HAIR DESIGN',
    title: { th: 'นายแบบทรงผม', en: 'Hair model' },
    media: [{ type: 'instagram', id: 'DdlHoLKC8cW' }],
  },
  {
    slug: 'entaku',
    category: 'model',
    status: 'soon',
    brand: 'ENTAKU EXHIBITION · JAPAN',
    title: { th: 'นักแสดงถ่ายแบบคอนเทนต์นิทรรศการ ประเทศญี่ปุ่น', en: 'Featured model — exhibition content, Japan' },
    year: '2026',
    desc: { th: 'จัดแสดง 14 ต.ค.', en: 'On show from October 14' },
  },
  {
    slug: 'persol',
    category: 'model',
    brand: 'PERSOL THAILAND',
    title: { th: 'นักแสดงคอนเทนต์สัมภาษณ์ (บท Graphic Designer)', en: 'Interview content actor (as a Graphic Designer)' },
  },
  {
    slug: 'commart',
    category: 'event',
    brand: 'COMMART',
    title: { th: 'เดินบิล พนักงานขาย และตัวแทนแนะนำสินค้าประจำบูธ', en: 'Booth sales & product presenter' },
    desc: { th: 'บูธ Razer, EPOS, Thermaltake และ IPASON', en: 'Razer, EPOS, Thermaltake and IPASON booths' },
  },
];
