 // ==========================================
// 1. RUMUS TRANSLITERASI (LATIN -> PEGON)
// ==========================================
export const latinToPegon = (text) => {
  if (!text) return '';
  let str = text.toLowerCase();

  // Mapping Diftong & Konsonan Khusus Pegon Sunda
  const map = [
    { l: 'nya', p: 'ڽَ' }, { l: 'nyi', p: 'ڽِ' }, { l: 'nyu', p: 'ڽُ' }, { l: 'nye', p: 'ڽِك' }, { l: 'nyo', p: 'ڽُك' }, { l: 'ny', p: 'ڽ' },
    { l: 'nga', p: 'ڠَ' }, { l: 'ngi', p: 'ڠِ' }, { l: 'ngu', p: 'ڠُ' }, { l: 'nge', p: 'ڠِك' }, { l: 'ngo', p: 'ڠُك' }, { l: 'ng', p: 'ڠ' },
    { l: 'ga', p: 'ݢَ' }, { l: 'gi', p: 'ݢِ' }, { l: 'gu', p: 'ݢُ' }, { l: 'ge', p: 'ݢِك' }, { l: 'go', p: 'ݢُك' }, { l: 'g', p: 'ݢ' },
    { l: 'pa', p: 'ڤَ' }, { l: 'pi', p: 'ڤِ' }, { l: 'pu', p: 'ڤُ' }, { l: 'pe', p: 'ڤِك' }, { l: 'po', p: 'ڤُك' }, { l: 'p', p: 'ڤ' },
    { l: 'ca', p: 'چَ' }, { l: 'ci', p: 'چِ' }, { l: 'cu', p: 'چُ' }, { l: 'ce', p: 'چِك' }, { l: 'co', p: 'چُك' }, { l: 'c', p: 'چ' },
    
    // Vokal Dasar
    { l: 'a', p: 'َ' }, { l: 'i', p: 'ِ' }, { l: 'u', p: 'ُ' }, { l: 'e', p: 'ِك' }, { l: 'o', p: 'ُك' },
    
    // Konsonan Standar
    { l: 'b', p: 'ب' }, { l: 't', p: 'ت' }, { l: 'j', p: 'ج' }, { l: 'd', p: 'د' },
    { l: 'r', p: 'ر' }, { l: 'z', p: 'ز' }, { l: 's', p: 'س' }, { l: 'k', p: 'ك' },
    { l: 'l', p: 'ل' }, { l: 'm', p: 'م' }, { l: 'n', p: 'ن' }, { l: 'w', p: 'و' },
    { l: 'h', p: 'ه' }, { l: 'y', p: 'ي' }, { l: ' ', p: ' ' }
  ];

  map.forEach(item => {
    str = str.replaceAll(item.l, item.p);
  });

  return str;
};

// ==========================================
// 2. FUNGSI HAPUS HARAKAT (GUNDUL)
// ==========================================
export const removeHarakat = (text) => {
  if (!text) return '';
  return text.replace(/[\u064B-\u0652]/g, "");
};
