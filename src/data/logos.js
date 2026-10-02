// โลโก้แบรนด์ (ไฟล์อยู่ที่ public/img/logos/{file}.png — สีงาช้าง พื้นโปร่งใส สูง 96px)
// w = ความกว้างไฟล์ (ใช้คำนวณขนาดให้แต่ละโลโก้ดูหนักเท่ากัน)
export const logos = {
  'SAMSONITE': { file: 'samsonite', w: 611 },
  'TECNO': { file: 'tecno', w: 479 },
  'JOYROOM': { file: 'joyroom', w: 624 },
  'UGREEN': { file: 'ugreen', w: 574 },
  'SKECHERS': { file: 'skechers', w: 1070 },
  'POSEE': { file: 'posee', w: 443 },
  'QIAODAN': { file: 'qiaodan', w: 354 },
  'AKASO': { file: 'akaso', w: 562 },
  'SOLOEVER': { file: 'soloever', w: 447 },
  'BOUSVCLIGHT': { file: 'bousvclight', w: 251 },
  'LIVELAB': { file: 'livelab', w: 415 },
  'DEVAS IPASON': { file: 'ipason', w: 693 },
  'IT CITY': { file: 'itcity', w: 447 },
};

/** ความสูงที่แสดง (px) ให้พื้นที่โลโก้ใกล้เคียงกัน: โลโก้ยาวจะเตี้ยลง โลโก้กะทัดรัดจะสูงขึ้น */
export function logoHeight(name, area = 5000, min = 18, max = 40) {
  const l = logos[name];
  if (!l) return 0;
  const aspect = l.w / 96;
  return Math.round(Math.min(max, Math.max(min, Math.sqrt(area / aspect))));
}
