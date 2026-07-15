// Fungsi transliterasi Pegon dengan metode komposisi huruf langsung
export function latinToPegon(text) {
  if (!text) return '';
  
  let hasil = text.toLowerCase();

  // 1. Kunci kata khusus agar tidak dipecah sistem
  if (hasil === 'allah') return 'الله';

  // 2. Ganti kombinasi 2 huruf (Konsonan Khusus)
  const konsonanKhusus = {
    'ng': 'ڠ', // Gain titik tiga
    'ny': 'ۑ', // Ya titik tiga
    'ch': 'چ', // Ca
    'kh': 'خ',
    'sh': 'ش'
  };

  for (const [latin, pegon] of Object.entries(konsonanKhusus)) {
    hasil = hasil.replaceAll(latin, pegon);
  }

  // 3. Ganti huruf satu per satu (Konsonan & Vokal sebagai huruf saksi langsung)
  const kamusHuruf = {
    // Vokal langsung jadi huruf saksi
    'a': 'ا',
    'i': 'ا', // atau bisa diganti 'ي' jika ingin "itu" jadi ايتو
    'u': 'و',
    'e': 'ي',
    'o': 'و',
    
    // Konsonan standar
    'b': 'ب',
    'c': 'چ',
    'd': 'د',
    'f': 'ف',
    'g': 'ݢ', // Kaf titik tiga / titik satu untuk G
    'h': 'ه',
    'j': 'ج',
    'k': 'ك',
    'l': 'ل',
    'm': 'م',
    'n': 'ن',
    'p': 'ڤ', // Fa titik tiga untuk P
    'q': 'ق',
    'r': 'ر',
    's': 'س',
    't': 'ت',
    'v': 'ڤ',
    'w': 'و',
    'y': 'ي',
    'z': 'ز',
    'x': '',
    ' ': ' ' // Spasi tetap spasi
  };

  // Susun komposisi hurufnya secara berurutan
  return hasil.split('').map(char => kamusHuruf[char] || char).join('');
}

// Fungsi pembantu menghilangkan harakat matan
export function removeHarakat(text) {
  if (!text) return '';
  return text.replace(/[\u064B-\u0652]/g, '');
}
