// Fungsi untuk mengubah huruf Latin menjadi Arab Pegon Sunda yang Benar
export function latinToPegon(text) {
  if (!text) return '';
  
  let hasil = text.toLowerCase();

  // 1. Hapus huruf asing
  hasil = hasil.replaceAll('x', '');

  // 2. Ganti kombinasi huruf konsonan khusus terlebih dahulu
  const konsonanKhusus = {
    'ng': 'ڠ', // Gain titik tiga
    'ny': 'ۑ', // Ya titik tiga (Ny) -> Contoh: nyebat jadi ۑبات
    'ch': 'چ', // Ca
    'kh': 'خ',
    'sh': 'ش'
  };

  for (const [latin, pegon] of Object.entries(konsonanKhusus)) {
    hasil = hasil.replaceAll(latin, pegon);
  }

  // 3. Ganti huruf vokal menjadi huruf saksi Pegon (Tanpa Hamzah kaku di tengah)
  const vokalPegon = {
    'a': 'ا',   // Alif biasa untuk vokal 'a' -> Contoh: kalawan jadi كلوان
    'i': 'ي',   // Ya biasa
    'u': 'و',   // Wawu biasa
    'e': '',    // Huruf 'e' (pepet) dalam pegon sunda sering tidak ditulis/lebur
    'o': 'و'    // Wawu
  };

  for (const [latin, pegon] of Object.entries(vokalPegon)) {
    hasil = hasil.replaceAll(latin, pegon);
  }

  // 4. Ganti konsonan tunggal standar
  const konsonanTunggal = {
    'b': 'ب',
    'c': 'چ',
    'd': 'د',
    'f': 'ف',
    'g': 'ݢ', // Kaf titik (G)
    'h': 'ه',
    'j': 'ج',
    'k': 'ك',
    'l': 'ل',
    'm': 'م',
    'n': 'ن',
    'p': 'ڤ', // Fa titik tiga (P)
    'q': 'ق',
    'r': 'ر',
    's': 'س',
    't': 'ت',
    'v': 'ڤ',
    'w': 'و',
    'y': 'ي',
    'z': 'ز',
    ' ': ' '
  };

  return hasil.split('').map(char => konsonanTunggal[char] || char).join('');
}

// Fungsi pembantu menghilangkan harakat matan
export function removeHarakat(text) {
  if (!text) return '';
  return text.replace(/[\u064B-\u0652]/g, '');
}
